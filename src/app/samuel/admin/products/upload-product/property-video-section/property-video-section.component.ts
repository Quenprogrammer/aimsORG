import {Component, EventEmitter, Input, Output, signal} from '@angular/core';

import {FeaturedVideoUploadComponent} from "./featured-video-upload/featured-video-upload.component";

import { NgIf } from '@angular/common';
interface Product {
  productID: string;
  name: string;
  basePrice: number;
  description: string;
  collection?: string;
  brand?: string;
  categories: string[];
  tags: string[];
  images: string[];
  customFields: { key: string; value: string }[];
  specifications: { key: string; value: string }[]; // ✅ include this
  video?: string;
}

@Component({
  selector: 'app-property-video-section',
  standalone: true,
  imports: [FeaturedVideoUploadComponent, NgIf],
  templateUrl: './property-video-section.component.html',
  styleUrl: './property-video-section.component.scss',
})
export class PropertyVideoSectionComponent {
  @Input({ required: true }) product: Product | undefined;
  @Output() onUpdateField = new EventEmitter<{
    $event: any;
    fieldName: string;
  }>();

  removeVideo() {
    const shouldRemoveVideo = confirm('Are you sure you want to remove video?');
    if (shouldRemoveVideo) {
      this.onUpdateField.emit({
        $event: { target: { value: null } },
        fieldName: 'video',
      });
    }
  }
}
