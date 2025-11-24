import {Component, EventEmitter, Input, OnChanges, Output, signal, SimpleChanges, WritableSignal} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {CdkDrag, CdkDropList, CdkDropListGroup} from "@angular/cdk/drag-drop";
import {UploadImagesComponent} from "./upload-images/upload-images.component";
import {ReOrderImagesComponent} from "./re-order-images/re-order-images.component";
import {ImagePreviewComponent} from "./image-preview/image-preview.component";

export enum imageSectionType {
  preview,
  upload,
  reorder
}

@Component({
  selector: 'lh-property-images-section',
  standalone: true,
  imports: [

    UploadImagesComponent,
    ReOrderImagesComponent,
    ImagePreviewComponent
  ],
  template: `
      @if (areaToShow() === imageSectionType.preview) {
          <app-image-preview [imageUrls]="imageUrls"
                             [fieldName]="fieldName"
                             [showSmall]="showSmall"
                             (onUpdateField)="onUpdateField.emit({$event:$event.$event,fieldName:$event.fieldName})"
                             (changeImageSection)="areaToShow.set($event)"
          ></app-image-preview>
      }
      @if (areaToShow() === imageSectionType.upload) {
          <app-upload-images [imageUrls]="imageUrls"
                             [fieldName]="fieldName"
                             (outUploadedImages)="imageUploadComplete($event)"
                             (changeImageSection)="areaToShow.set($event)"
          ></app-upload-images>
      }
      @if (areaToShow() === imageSectionType.reorder) {
          <app-re-order-images [imageUrls]="imageUrls"
                               [fieldName]="fieldName"
                               (changeImageSection)="areaToShow.set($event)"
                               [showSmall]="showSmall"
                               (onUpdateField)="onUpdateField.emit({$event:$event.$event,fieldName:$event.fieldName})"
          ></app-re-order-images>
      }
  `
})
export class PropertyImagesSectionComponent implements OnChanges {
  @Input({required: true}) imageUrls: string[] = [];
  @Input({required: true}) fieldName: string | undefined;
  @Input() showSmall: boolean = false;
  areaToShow: WritableSignal<imageSectionType> = signal(imageSectionType.preview);
  @Output() onUpdateField = new EventEmitter<{ $event: any, fieldName: string }>();
  protected readonly imageSectionType = imageSectionType;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.imageUrls?.length === 0) {
      this.areaToShow.set(imageSectionType.upload);
    } else {
      this.areaToShow.set(imageSectionType.preview)
    }
  }


  imageUploadComplete($event: string[]) {
    const updatedImages = [...(this.imageUrls ?? []), ...$event];
    console.log("Updated images:", updatedImages);

    this.onUpdateField.emit({ $event: updatedImages, fieldName: this.fieldName! });
  }


}
