import { Component, OnInit, inject } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NoDocumentComponent} from '../../shared/no-document/no-document.component';
import {LoadingComponent} from '../../shared/loading/loading.component';
import {Purchase, PurchaseService} from '../../system/vendor/purchase.service';


@Component({
  selector: 'lh-purchase',
  standalone: true,
  imports: [NgForOf, NgIf, NoDocumentComponent, LoadingComponent, FormsModule],
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
})
export class PurchaseComponent implements OnInit {
  private purchaseService = inject(PurchaseService);
  purchases: Purchase[] = [];
  filteredPurchases: Purchase[] = [];
  loading = true;
  searchTerm = '';

  ngOnInit(): void {
    this.purchaseService.getPurchases().subscribe({
      next: (data) => {
        this.purchases = data;
        this.filteredPurchases = [...this.purchases];
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading purchases:', err);
        this.loading = false;
      },
    });
  }

  onSearch(): void {
    this.filteredPurchases = this.purchaseService.filterPurchases(this.purchases, this.searchTerm);
  }
}
