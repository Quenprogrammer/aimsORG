import {Component, EventEmitter, Input, Output} from '@angular/core';
import {imageSectionType} from "../property-images-section.component";
import {LightboxComponent, MediaItem, MediaType} from '../../../../../system/lightbox/lightbox.component';


@Component({
  selector: 'app-image-preview',
  standalone: true,
  imports: [
    LightboxComponent
  ],
  template: `
      <div class="row mb-lg-0 pb-2 ">
          <div class="row gap-2 m-n2 ps-2 pt-2 p-0" style=" width: 100%">
              @for (item of imageUrls;track item;let i = $index) {
                  <div class="position-relative " (click)="openLightBox(i)"
                       [style]="showSmall?'padding: 0;  height: 10rem; width: 48.2%':'padding: 0;  height: 15rem; width: 24.2%'">
                      <img
                              style="object-fit: cover; height: 100%; width: 100%"
                              [src]=" item "/>
                      <div class="position-absolute end-0 mb-3 me-3" style="top:5%; right:3%;">
                      <span (click)="removeImage(i)" class="video-player video-player-btn"
                            role="button">
             <span class="d-flex justify-content-center align-items-center">
               <span class="video-player-icon shadow-sm">
                 <i [class]="'bi-x'"></i>
               </span>
             </span>
               </span>
                      </div>

                  </div>

              }
              <button (click)="changeImageSection.emit(imageSectionType.upload)" type="button"
                      class="col   embed-responsive-1by1 btn-block btn btn-outline-secondary border">
                  <small class="mt-4"> Add Images</small>
              </button>

          </div>


    <!--      <button type="button"
                  (click)="changeImageSection.emit(imageSectionType.reorder)"
                  class="col-auto mt-3  embed-responsive-1by1 btn-block btn btn-outline-primary border">
              <small class="mt-4"> Re-order images</small>
          </button>-->
      </div>

      <kib-lightbox
              [currentImageIndex]="currentLightBoxImageIndex"
              [images]="mediaList"
              (hasClosed)="lightBoxClosed()"
              [isOpen]="isLightBoxOpen"
      ></kib-lightbox>

  `,
  styles: `
  .image-remove-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
  `
})
export class ImagePreviewComponent {
  @Input({required: true}) imageUrls: string[] = [];
  @Input({required: true}) fieldName: string | undefined;
  @Input() showSmall: boolean = false;
  @Output() changeImageSection = new EventEmitter<imageSectionType>();
  @Output() onUpdateField = new EventEmitter<{ $event: any, fieldName: string }>();
  protected readonly imageSectionType = imageSectionType;

  removeImage(i: number) {
    const shouldDeleteImage = confirm("Are you sure you want to delete Property Image?");
    if (shouldDeleteImage) {
      this.imageUrls = this.imageUrls.filter((value, index) => index !== i);
      this.onUpdateField.emit({$event: {target: {value: this.imageUrls}}, fieldName: this.fieldName!})
    }
  }

  currentImageIndex: number = 0;
  isLightBoxOpen = false;
  currentLightBoxImageIndex = 0;

  get mediaList() {
    return this.imageUrls.map(c => ({
      type: MediaType.photo,
      url: c
    } as MediaItem)) ?? [];
  }

  openLightBox(index: number) {
    this.currentLightBoxImageIndex = index;
    this.isLightBoxOpen = true;

  }

  lightBoxClosed() {
    this.isLightBoxOpen = false;
  }

}
