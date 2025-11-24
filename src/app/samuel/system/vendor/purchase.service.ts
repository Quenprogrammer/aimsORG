import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UserContextService } from '../auth/user-context.service';


export interface Purchase {
  id?: string;
  productName: string;
  productLink: string;
  productImage: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  date: string;
  license: string;
}

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {
  private firestore = inject(Firestore);
  private userContext = inject(UserContextService);

  getPurchases(): Observable<Purchase[]> {
    const docId = this.userContext.vendor();
    const purchasesRef = collection(this.firestore, `vendors/${docId}/purchases`);
    return collectionData(purchasesRef, { idField: 'id' }) as Observable<Purchase[]>;
  }

  filterPurchases(purchases: Purchase[], term: string): Purchase[] {
    const lowerTerm = term.toLowerCase().trim();
    if (!lowerTerm) return [...purchases];

    return purchases.filter((purchase) =>
      purchase.productName.toLowerCase().includes(lowerTerm) ||
      purchase.author.name.toLowerCase().includes(lowerTerm) ||
      purchase.category.toLowerCase().includes(lowerTerm) ||
      purchase.license.toLowerCase().includes(lowerTerm) ||
      purchase.date.toLowerCase().includes(lowerTerm)
    );
  }
}
