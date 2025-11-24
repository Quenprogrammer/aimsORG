import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-picture-uploa',
  imports: [
    NgForOf,
    ReactiveFormsModule
  ],
  template: `
    <div class="container mt-5">
      <div class="card shadow-sm">
        <div class="card-header bg-primary text-white">
          <h4>Upload Pictures</h4>
        </div>
        <div class="card-body">
          <form [formGroup]="pictureForm" (ngSubmit)="onSubmit()">

            <!-- Title -->
            <div class="mb-3">
              <label class="form-label">Title</label>
              <input type="text" formControlName="title" class="form-control" placeholder="Gallery title">
            </div>

            <!-- Description -->
            <div class="mb-3">
              <label class="form-label">Description</label>
              <textarea formControlName="description" class="form-control" rows="3" placeholder="Gallery description"></textarea>
            </div>

            <!-- Images -->
            <div class="mb-3">
              <label class="form-label">Select Images</label>
              <input type="file" class="form-control" (change)="onFilesChange($event)" accept="image/*" multiple>
            </div>

            <!-- Preview -->
            <div class="mb-3" *ngIf="imagePreviews.length > 0">
              <label class="form-label">Preview</label>
              <div class="d-flex flex-wrap gap-2">
                <img *ngFor="let img of imagePreviews" [src]="img" alt="Preview" class="img-thumbnail" style="width: 120px; height: 120px; object-fit: cover;">
              </div>
            </div>

            <!-- Submit -->
            <button type="submit" class="btn btn-success" [disabled]="pictureForm.invalid">Upload Pictures</button>

          </form>
        </div>
      </div>
    </div>

  `,
  styles:``
})
export class PictureUploa {
  pictureForm: FormGroup<{
    title: FormControl<string>;
    description: FormControl<string>;
    images: FormControl<File[] | null>;
  }>;

  selectedFiles: File[] = [];
  imagePreviews: string[] = [];

  constructor(private fb: FormBuilder) {
    this.pictureForm = this.fb.group({
      title: new FormControl('', { nonNullable: true, validators: Validators.required }),
      description: new FormControl('', { nonNullable: true }),
      images: new FormControl<File[] | null>(null, { validators: Validators.required }),
    });
  }

  onFilesChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFiles = Array.from(event.target.files);
      this.pictureForm.patchValue({ images: this.selectedFiles });

      // Create image previews
      this.imagePreviews = [];
      for (let file of this.selectedFiles) {
        const reader = new FileReader();
        reader.onload = (e: any) => this.imagePreviews.push(e.target.result);
        reader.readAsDataURL(file);
      }
    }
  }

  onSubmit() {
    if (this.pictureForm.valid) {
      console.log('Picture Form Data:', this.pictureForm.value);
      console.log('Selected Files:', this.selectedFiles);
    } else {
      console.log('Form Invalid');
    }
  }
}
