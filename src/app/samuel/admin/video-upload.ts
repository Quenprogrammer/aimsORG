import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-video-upload',
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  template: `
    <div class="container-fluid">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        <div class="col mb-3 mb-lg-5">
          <!-- Card -->
          <div class="card card-sm card-hover-shadow card-header-borderless h-100 text-center">
            <div class="card-header card-header-content-between border-0">
              <span class="small">25kb</span>

              <!-- Dropdown -->
              <div class="dropdown">
                <button type="button" class="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="filesGridDropdown1" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="bi-three-dots-vertical"></i>
                </button>

                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="filesGridDropdown1" style="min-width: 13rem;">
                  <span class="dropdown-header">Settings</span>

                  <a class="dropdown-item" href="#">
                    <i class="bi-share dropdown-item-icon"></i> Share file
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="bi-folder-plus dropdown-item-icon"></i> Move to
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="bi-star dropdown-item-icon"></i> Add to stared
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="bi-pencil dropdown-item-icon"></i> Rename
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="bi-download dropdown-item-icon"></i> Download
                  </a>

                  <div class="dropdown-divider"></div>

                  <a class="dropdown-item" href="#">
                    <i class="bi-chat-left-dots dropdown-item-icon"></i> Report
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="bi-trash dropdown-item-icon"></i> Delete
                  </a>
                </div>
              </div>
              <!-- End Dropdown -->
            </div>

            <div class="card-body">
              <img class="avatar avatar-4x3" src="adminIcon/video-frame-play-horizontal-svgrepo-com.svg" alt="Image Description" style="width: 80px; height: 80px">
            </div>

            <div class="card-body">
              <h5 class="card-title">WordPress contract terms</h5>
              <p class="small">Updated 50 min ago</p>
            </div>

            <a class="stretched-link" href="#"></a>
          </div>
          <!-- End Card -->
        </div>
        <div class="col mb-3 mb-lg-5">
          <!-- Card -->
          <div class="card card-sm card-hover-shadow card-header-borderless h-100 text-center">
            <div class="card-header card-header-content-between border-0">
              <span class="small">25kb</span>

              <!-- Dropdown -->
              <div class="dropdown">
                <button type="button" class="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="filesGridDropdown1" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="bi-three-dots-vertical"></i>
                </button>

                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="filesGridDropdown1" style="min-width: 13rem;">
                  <span class="dropdown-header">Settings</span>

                  <a class="dropdown-item" href="#">
                    <i class="bi-share dropdown-item-icon"></i> Share file
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="bi-folder-plus dropdown-item-icon"></i> Move to
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="bi-star dropdown-item-icon"></i> Add to stared
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="bi-pencil dropdown-item-icon"></i> Rename
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="bi-download dropdown-item-icon"></i> Download
                  </a>

                  <div class="dropdown-divider"></div>

                  <a class="dropdown-item" href="#">
                    <i class="bi-chat-left-dots dropdown-item-icon"></i> Report
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="bi-trash dropdown-item-icon"></i> Delete
                  </a>
                </div>
              </div>
              <!-- End Dropdown -->
            </div>

            <div class="card-body">
              <img class="avatar avatar-4x3" src="adminIcon/music-notes-svgrepo-com.svg" alt="Image Description" style="width: 80px; height: 80px">
            </div>

            <div class="card-body">
              <h5 class="card-title">WordPress contract terms</h5>
              <p class="small">Updated 50 min ago</p>
            </div>

            <a class="stretched-link" href="#"></a>
          </div>
          <!-- End Card -->
        </div>

      </div>
    </div>
    <div class="container mt-5">
      <div class="card shadow-sm">
        <div class="card-header bg-primary text-white">
          <h4>Upload Video</h4>
        </div>
        <div class="card-body">
          <form [formGroup]="videoForm" (ngSubmit)="onSubmit()">

            <!-- Title -->
            <div class="mb-3">
              <label class="form-label">Title</label>
              <input type="text" formControlName="title" class="form-control" placeholder="Video title">
            </div>

            <!-- Description -->
            <div class="mb-3">
              <label class="form-label">Description</label>
              <textarea formControlName="description" class="form-control" rows="3" placeholder="Video description"></textarea>
            </div>

            <!-- Category -->
            <div class="mb-3">
              <label class="form-label">Category</label>
              <select formControlName="category" class="form-select">
                <option value="">Select Category</option>
                <option *ngFor="let c of categories" [value]="c">{{ c }}</option>
              </select>
            </div>

            <!-- Release Date -->
            <div class="mb-3">
              <label class="form-label">Release Date</label>
              <input type="date" formControlName="releaseDate" class="form-control">
            </div>

            <!-- Video File -->
            <div class="mb-3">
              <label class="form-label">Video File</label>
              <input type="file" class="form-control" (change)="onFileChange($event)" accept="video/*">
            </div>

            <!-- Submit -->
            <button type="submit" class="btn btn-success" [disabled]="videoForm.invalid">Upload Video</button>

          </form>
        </div>
      </div>
    </div>

  `,
  styles:``
})
export class VideoUpload {
  videoForm: FormGroup<{
    title: FormControl<string>;
    description: FormControl<string>;
    category: FormControl<string>;
    releaseDate: FormControl<string>;
    videoFile: FormControl<File | null>;
  }>;

  selectedFile: File | null = null;

  categories: string[] = [
    'Education',
    'Entertainment',
    'Music',
    'Sports',
    'News',
    'Vlog',
    'Other'
  ];

  constructor(private fb: FormBuilder) {
    this.videoForm = this.fb.group({
      title: new FormControl('', { nonNullable: true, validators: Validators.required }),
      description: new FormControl('', { nonNullable: true }),
      category: new FormControl('', { nonNullable: true, validators: Validators.required }),
      releaseDate: new FormControl('', { nonNullable: true, validators: Validators.required }),
      videoFile: new FormControl<File | null>(null, { validators: Validators.required }),
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.videoForm.patchValue({ videoFile: this.selectedFile });
    }
  }

  onSubmit() {
    if (this.videoForm.valid) {
      console.log('Video Form Data:', this.videoForm.value);
    } else {
      console.log('Form Invalid');
    }
  }
}
