import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, NgClass],
  templateUrl: './delivery.component.html'
})
export class DeliveryComponent {
  // ===================== POSTCODE FORM =====================
  postcode: string = '';
  submitted = false;

  submitPostcode() {
    if (this.postcode.trim() !== '') {
      console.log('Postcode submitted:', this.postcode);
      this.submitted = true;
    } else {
      console.log('Please enter a postcode');
      this.submitted = false;
    }
  }

  // ===================== ORDER SUMMARY DATA =====================
  orderSummary = {
    title: 'Order summary',
    editLink: 'checkout-v1-delivery-2.html',
    previewLink: '#orderPreview',
    images: [
      { src: 'assets/img/shop/electronics/thumbs/08.png', alt: 'iPhone' },
      { src: 'assets/img/shop/electronics/thumbs/09.png', alt: 'iPad Pro' },
      { src: 'assets/img/shop/electronics/thumbs/01.png', alt: 'Smart Watch' }
    ]
  };

  summaryItems = [
    { label: 'Subtotal (3 items):', value: '$2,427.00', type: 'normal' },
    { label: 'Saving:', value: '-$110.00', type: 'danger' },
    { label: 'Tax collected:', value: '$73.40', type: 'normal' },
    { label: 'Shipping:', value: 'Calculated at checkout', type: 'normal' }
  ];

  estimatedTotal = '$2,390.40';

  bonus = {
    message: 'Congratulations! You have earned',
    points: 239
  };
}
