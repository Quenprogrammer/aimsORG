import {Component, computed, DoCheck, EventEmitter, inject, Input, Output, signal, WritableSignal} from '@angular/core';

import {DecimalPipe, JsonPipe, NgClass, NgIf} from "@angular/common";
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import {ImagePreloaderDirective} from '../../../../../system/lightbox/image-preloader.directive';
import {VideoUploadService} from '../../../../../system/video-upload.service';


@Component({
  selector: 'app-featured-video-upload',
  standalone: true,
  imports: [
    ImagePreloaderDirective,
    NgIf,
    DecimalPipe,
    JsonPipe,
    NgClass,
  ],
  template: `
    <div class="row row-cols-1 gap-2 justify-content-center ">

      @if (currentImageUrl) {
        <div class=" d-flex flex-column justify-content-center align-items-center w-100">
          <img [img-preloader]="currentImageUrl" alt=""
               class="my-2 card card-dashed shadow-none rounded-1"
               style="width: 100%; max-width: 500px; height: 12rem; object-fit: cover"/>
          <button (click)="deleteImage()" class="btn btn-sm btn-outline-danger mt-2">Remove image</button>
        </div>
      } @else {
        <div class="my-2 rounded-1 w-100 d-flex flex-column justify-content-center align-items-center">
          @if (videoUploadInProgress()) {
            <p>Video is currently being uploaded</p>
            <div class="progress mt-3 w-75">
              <div class="progress-bar bg-success" role="progressbar"
                   [style.width.%]=" videoUploadInProgress()?.progress">
                {{ videoUploadInProgress()?.progress | number: '1.2-2' }} %
              </div>
            </div>
          } @else {
            <div id="attachFilesNewProjectLabel"
                 (dragover)="dragOver($event)" (dragleave)="dragLeave($event)"
                 (drop)="drop($event)" [ngClass]="dropEnter ? 'drop-enter' : ''"
                 (click)="fileInput.click()"
                 class="js-dropzone dz-dropzone dz-dropzone-card dz-clickable d-flex flex-column justify-content-center align-items-center p-3">

              <div class="dz-message text-center bg-body-tertiary">
                <img style="width: 100px;" class="avatar avatar-xl my-3" src="assets/oc-browse.svg"
                     alt="Image Description" data-hs-theme-appearance="dark">

                <h6>Drag and drop your video file here</h6>
                <span class="btn btn-outline-dark my-3">Browse</span>
                <input #fileInput type="file" style="display: none;"
                       (change)="onFileSelected($event)" [multiple]="false">
              </div>
            </div>
          }

          <small class="text-muted d-block pt-2 pb-1">
            <i class="fa fa-info-circle"></i>
            Only mp4 videos with size ≤ 500mb can be uploaded. upload will continue even if you leave  edit page
          </small>

          @if (errorMessage()) {
            <p class="text-danger mt-2">{{ errorMessage() }}</p>
          }
        </div>
      }
    </div>
  `,

  styles: `
    .drop-enter{
    border:0.125rem dashed rgb(166 123 58);
    }
  `
})
export class FeaturedVideoUploadComponent implements DoCheck {
  @Input({required: true}) currentImageUrl: string | undefined;
  @Input({required: true}) fieldName: string = 'error';
  @Input({required: true}) propertyId: string | undefined;
  @Input({required: true}) path: string = 'other-folder';
  firestore = inject(Firestore);
  uploadService: VideoUploadService = inject(VideoUploadService);
  videoUploadInProgress = computed(() => {
    if (this.uploadService.videoUploadingProgress().length > 0) {

      return this.uploadService.videoUploadingProgress()
        .find(c => c.resourceId === this.propertyId);

    } else {
      return undefined;
    }
  });
  progressSig: WritableSignal<number> = signal(0);
  selectedFile: File | null = null;

  @Output() onUpdateField = new EventEmitter<{ $event: any, fieldName: string }>();
  errorMessage = signal<string | null>(null);
  dropEnter: boolean = false;


  updateField($event: any, fieldName: string) {
    this.onUpdateField.emit({$event, fieldName})
  }

  onFileSelected(event: any): void {
    console.log(event.target.files);
    this.selectedFile = event.target.files[0];
    this.errorMessage.set(null);
    console.log("File selected and about to begin upload");
    this.uploadFile();
  }


  dragOver(event: any): void {
    this.dropEnter = true;
    event.preventDefault();
    event.stopPropagation();
  }

  dragLeave(event: any): void {
    this.dropEnter = false;
    event.preventDefault();
    event.stopPropagation();
  }

  drop(event: DragEvent): void {
    this.dropEnter = false;
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer && event.dataTransfer.files) {
      this.selectedFile = event.dataTransfer.files[0];
      this.errorMessage.set(null);
      console.log("File selected and about to begin upload");
      this.uploadFile();
    } else {
      console.error("Error: No files found in the drag event.");
    }
  }


  uploadFile(): void {
    if (!this.selectedFile) {
      console.error("No file selected");
      this.errorMessage.set('No file selected');
      return;
    }

    if (!this.selectedFile.type.startsWith('video')) {
      console.error("Selected file is not a video");
      this.errorMessage.set('Selected file is not a video');
      return;
    }

    if (this.selectedFile.size > 509715200) { // 500 MB in bytes
      this.errorMessage.set('File size exceeds 500MB');
    }

    this.uploadService.uploadVideo(this.selectedFile, this.path, this.propertyId!, 'PROPERTIES')
  }


  setNewImage(imageUrl: string) {
    this.updateField({target: {value: imageUrl}}, this.fieldName);
  }


  deleteImage() {
    const shouldDelete = confirm('Are you sure you want to delete image?');
    if (shouldDelete) {
      this.updateField({target: {value: null}}, this.fieldName)
    }
  }

  ngDoCheck() {
    const uploadInfo = this.videoUploadInProgress();
    if (uploadInfo && uploadInfo.url) {
      console.log("✅ Video uploaded. Download URL:", uploadInfo.url);

      this.setNewImage(uploadInfo.url);

      // ✅ Save directly into PROPERTIES/{propertyId}/video field
      const propertyDoc = doc(this.firestore, "PROPERTIES", this.propertyId!);
      setDoc(
        propertyDoc,
        {
          video: uploadInfo.url,
          updatedAt: new Date(),
        },
        { merge: true } // ✅ ensures create if not exists, update if exists
      )
        .then(() => {
          console.log("✅ Video URL saved/updated in PROPERTIES");
        })
        .catch((err) => {
          console.error("❌ Error saving video URL:", err);
        });
    }
  }


}
