import { Component, signal, OnInit, computed, inject } from '@angular/core';

import { NgIf, NgFor, DecimalPipe, CurrencyPipe, NgClass } from '@angular/common';
import {
  Firestore,
  collection,
  collectionData,
  deleteDoc,
  doc
} from '@angular/fire/firestore';

import { FormsModule } from '@angular/forms';
import {LoadingComponent} from '../../shared/loading/loading.component';
import {DocCounterComponent} from '../../shared/collection-count/collection-count.component';
import {SelectComponent} from '../../shared/select/select.component';
import {UserContextService} from '../../system/auth/user-context.service';


export interface SaleItem {
  name: string;
  price: number;
  qty: number;
  img: string;
}

export interface DeliveryInfo {
  estimatedDate: string;
  shippingMethod: string;
  shippingAddress: string;
}

export interface PaymentInfo {
  method: string;
  tax: number;
  shipping: number;
}

export interface Sale {
  id?: string;
  status: string;
  items: SaleItem[];
  delivery: DeliveryInfo;
  payment: PaymentInfo;
  total: number;
  earning: number;
  createdAt?: string; // Optional timestamp field (string or ISO format)
}

@Component({
  selector: 'lh-sales',
  standalone: true,
  imports: [
    SelectComponent,
    NgIf,
    NgFor,
    DecimalPipe,
    LoadingComponent,
    CurrencyPipe,
    FormsModule,
    NgClass,
    DocCounterComponent,
  ],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss',
})
export class SalesComponent implements OnInit {
  loading = signal(true);
  noSales = signal(false);
  private userContext = inject(UserContextService);
  get docId() {
    return this.userContext. vendor(); // 🔥 dynamic & reactive
  }


  // Filters
  searchQuery = signal('');
  selectedPeriod = signal('Last 3 months');
  periodOptions = [
    'Current month',
    'Last month',
    'Last 3 months',
    'Last 6 months',
    'Last year',
    'All time',
  ];

  sales: Sale[] = [];

  openPreview = signal(false);
  selectedSale = signal<Sale | null>(null);

  constructor(private firestore: Firestore) {}

  ngOnInit(): void {
    this.loadSales();
  }

  loadSales(): void {
    const salesCollection = collection(
      this.firestore,
      `vendors/${this.docId}/sales`
    );
    this.loading.set(true);

    collectionData(salesCollection, { idField: 'id' }).subscribe({
      next: (data) => {
        this.sales = (data as Sale[]).map((s) => ({
          ...s,
          createdAt: s['createdAt'] || new Date().toISOString(),
        }));
        this.loading.set(false);
        this.noSales.set(this.sales.length === 0);
      },
      error: (err) => {
        console.error('❌ Error loading sales:', err);
        this.loading.set(false);
        this.noSales.set(true);
      },
    });
  }

  /** 🧹 Filter sales based on search and selected period */
  get filteredSales(): Sale[] {
    const query = this.searchQuery().toLowerCase().trim();
    const period = this.selectedPeriod();

    // Date filtering logic
    const now = new Date();
    const getMonthsAgo = (months: number) => {
      const d = new Date();
      d.setMonth(d.getMonth() - months);
      return d;
    };

    const startDate =
      period === 'Current month'
        ? new Date(now.getFullYear(), now.getMonth(), 1)
        : period === 'Last month'
        ? new Date(now.getFullYear(), now.getMonth() - 1, 1)
        : period === 'Last 3 months'
        ? getMonthsAgo(3)
        : period === 'Last 6 months'
        ? getMonthsAgo(6)
        : period === 'Last year'
        ? getMonthsAgo(12)
        : null;

    return this.sales.filter((sale) => {
      // Filter by period
      let inPeriod = true;
      if (startDate && sale.createdAt) {
        const saleDate = new Date(sale.createdAt);
        inPeriod = saleDate >= startDate;
      }

      // Filter by search query (product name or status)
      const inSearch =
        !query ||
        sale.items.some((item) => item.name.toLowerCase().includes(query)) ||
        sale.status.toLowerCase().includes(query);

      return inSearch && inPeriod;
    });
  }

  async deleteSale(saleId: string): Promise<void> {
    if (!saleId) return;
    if (!confirm('Are you sure you want to delete this sale?')) return;

    try {
      const saleDocRef = doc(
        this.firestore,
        `vendors/${this.docId}/sales`,
        saleId
      );
      await deleteDoc(saleDocRef);
      console.log(`🗑️ Sale ${saleId} deleted successfully!`);
      this.sales = this.sales.filter((s) => s.id !== saleId);
      this.noSales.set(this.sales.length === 0);
    } catch (error) {
      console.error('❌ Error deleting sale:', error);
    }
  }

  viewSale(sale: Sale): void {
    this.selectedSale.set(sale);
    this.openPreview.set(true);
  }

  closePreview(): void {
    this.openPreview.set(false);
    this.selectedSale.set(null);
  }
}
