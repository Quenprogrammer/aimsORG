import {Component, effect, EventEmitter, inject, Input, Output, signal, WritableSignal} from '@angular/core';

import {imageSectionType} from "../property-images-section.component";
import {DecimalPipe, NgClass} from "@angular/common";


import {ImageUploadService} from '../../../../../system/image-upload.service';
import {TruncateTextPipe} from '../../../../../system/truncate-text-pipe/truncate-text.pipe';


@Component({
  selector: 'app-upload-images',
  standalone: true,
  imports: [NgClass, DecimalPipe, TruncateTextPipe, TruncateTextPipe, TruncateTextPipe],
  providers: [ImageUploadService],
  template: `
    <label class="col-auto text-dark col-form-label form-control-label">
      Upload images <i class="bi-question-circle"></i>
    </label>
    <div class="form-row mb-8 mb-lg-0 mb-10 pb-2 d-flex flex-column align-items-center text-center">


      <div class="col-12 d-flex justify-content-center bg-dotted p-4">
        <div
          (click)="uploadInput.click()"
          id="imageDropzone"
          (dragover)="dragOver($event)"
          (dragleave)="dragLeave($event)"
          (drop)="drop($event)"
          [ngClass]="dropEnter ? 'drop-enter' : ''"
          class="js-dropzone dz-dropzone dz-dropzone-card dz-clickable text-center"
        >
          <div class="dz-message py-8 ">
            <input
              [hidden]="true"
              #uploadInput
              type="file"
              (change)="fileInputChanged($event)"
              [multiple]="true"
            />
            <span class="d-block my-5">Drag & Drop your image files</span>
            <span class="d-block">Or</span>
            <span class="btn btn-dark mt-5 btn-md my-1">Browse files</span>
            <span class="d-block text-muted small my-5">
          Maximum file size is 10mb
        </span>
            <i class="fa fa-info-circle"></i> Only images ('png', 'jpg', 'jpeg', 'gif', 'tiff', 'bpg') with size less than or equal to 10mb can be uploaded

          </div>
        </div>
      </div>

      <br />

      @for (error of errorMessage(); track error) {
        <span class="text-muted d-block pt-1 pb-1">
      {{ error.fileName | truncateText : 50 }}:
      <span class="text-danger"> {{ error.error }}</span>
    </span>
      }

      @for (fileUpload of imageUploadService.imageUploadingProgress(); track fileUpload) {
        <div class="row justify-content-center w-100 align-items-center mb-2">
          <div class="col-4 text-center text-truncate" style="max-width: 150px;">
            {{ fileUpload.fileName | truncateText : 15 }}:
          </div>
          <div class="col-8">
            <div class="progress">
              <div
                class="progress-bar bg-success"
                role="progressbar"
                [style.width.%]="fileUpload?.progress"
              >
                {{ fileUpload?.progress | number : '1.2-2' }}%
              </div>
            </div>
          </div>
        </div>
      }


      <br />





      <button
        (click)="done()"
        type="button"
        class="mt-2 btn btn-primary border"
      >
        <small class="">  <i class="ci-settings animate-target px-2"></i>Done</small>
      </button>
    </div>

  `,
  styles: `
    .drop-enter{
      border:0.125rem dashed rgb(166 123 58);
    }
  `,
})
export class UploadImagesComponent {
  imageUploadService: ImageUploadService = inject(ImageUploadService);
  @Input({ required: true }) imageUrls: string[] = [];
  @Input({ required: true }) fieldName: string | undefined;
  @Output() changeImageSection = new EventEmitter<imageSectionType>();
  @Output() outUploadedImages = new EventEmitter<string[]>();
  protected readonly imageSectionType = imageSectionType;
  dropEnter: boolean = false;
  errorMessage: WritableSignal<{ fileName: string; error: string }[]> = signal(
    []
  );

  constructor() {
    effect(() => {
      console.log(
        `The current count is: ${this.imageUploadService.imageUploadingProgress()}`
      );
    });
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

  drop(event: any): void {
    this.dropEnter = false;
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer && event.dataTransfer.files) {
      //clear all errors
      this.errorMessage.set([]);
      this.validateUploadedFiles(event.dataTransfer.files);
    } else {
      console.error('Error: No files found in the drag event.');
    }
  }

  fileInputChanged(event: any): void {
    const files = event.target.files;
    this.validateUploadedFiles(files);
  }

  validateUploadedFiles(files: File[]) {
    //loop through and then add to selectedFiles;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (!this.isValidImageType(file)) {
        const currentErrors = this.errorMessage();
        currentErrors.push({
          fileName: file.name,
          error: `${file.type} is an unsupported file type`,
        });
        this.errorMessage.set(currentErrors);
        continue;
      }

      if (file.size > 10 * 1024 * 1024) {
        // 10 MB in bytes
        const bytes = file.size;
        const megabytes = bytes / (1024 * 1024);

        const error = {
          fileName: file.name,
          error: `${megabytes.toFixed(
            2
          )} MB is too large for this upload (limit is 10 MB)`,
        };

        // Safely get the current error list and append the new error
        const currentErrors = this.errorMessage() || [];
        currentErrors.push(error);
        this.errorMessage.set(currentErrors);

        continue; // Skip this file
      }

      this.uploadFile(file);
    }
  }

  private isValidImageType(file: File): boolean {
    const allowedTypes = [
      'image/jpeg',
      'image/jpg',
      'image/jpe',
      'image/pjpeg',
      'image/pjpg',
      'image/png',
      'image/x-png',
      'image/webp',
      'image/x-webp',
      'image/gif',
      'image/giff',
      'image/bmp',
      'image/x-bmp',
      'image/x-windows-bmp',
      'image/svg+xml',
      'image/svg',
      'image/svg-xml',
      'image/tiff',
      'image/tif',
      'image/x-tiff',
      'image/ico',
      'image/icon',
      'image/x-icon',
      'image/vnd.microsoft.icon',
    ];
    return allowedTypes.includes(file.type);
  }

  uploadFile(file: File) {
    this.convertImageToWebP(file)
      .then((webpBlob) => {
        const webpFile = new File(
          [webpBlob],
          file.name.replace(/\.[^/.]+$/, '') + '.webp',
          { type: 'image/webp' }
        );
        this.imageUploadService.uploadImage(
          webpFile,
          'PROPERTIES/IMAGES',
          this.getRandomNumber()
        );
      })
      .catch((error) => {
        console.error('WebP conversion failed:', error);
        const currentErrors = this.errorMessage();
        currentErrors.push({
          fileName: file.name,
          error: `Failed to convert image to WebP`,
        });
        this.errorMessage.set(currentErrors);
      });
  }

  getRandomNumber() {
    const date = new Date();

    // Get milliseconds and seconds
    const milliseconds = date.getMilliseconds();
    const seconds = date.getSeconds();

    // Combine milliseconds and seconds to get a unique number
    const randomNumber = parseInt(`${milliseconds}${seconds}`);

    return randomNumber.toString();
  }

  done() {
    const imageUrls: string[] = this.imageUploadService
      .imageUploadingProgress()
      .filter((d) => d.url)
      .map((c) => c.url as string);

    // Emit new array reference so Angular detects change
    this.outUploadedImages.emit([...imageUrls]);

    this.changeImageSection.emit(imageSectionType.preview);
  }



  private convertImageToWebP(file: File): Promise<Blob> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          if (!ctx) return reject('Canvas context is null');
          ctx.drawImage(img, 0, 0);
          canvas.toBlob(
            (blob) => {
              if (blob) resolve(blob);
              else reject('Failed to convert canvas to WebP');
            },
            'image/webp',
            0.9
          ); // Quality: 0.9
        };
        img.onerror = (err) => reject('Image load error: ' + err);
        img.src = e.target?.result as string;
      };
      reader.onerror = (err) => reject('FileReader error: ' + err);
      reader.readAsDataURL(file);
    });
  }
}
