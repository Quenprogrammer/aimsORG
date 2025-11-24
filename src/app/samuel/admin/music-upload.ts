import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Storage, ref, uploadBytesResumable, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-music-upload',
  standalone: true,
  imports: [ReactiveFormsModule, NgForOf, NgIf],
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
          <h4>Upload Music</h4>
        </div>
        <div class="card-body">
          <form [formGroup]="musicForm" (ngSubmit)="onSubmit()">

            <div class="mb-3">
              <label class="form-label">Title</label>
              <input type="text" formControlName="title" class="form-control" placeholder="Song title">
            </div>

            <div class="mb-3">
              <label class="form-label">Artist</label>
              <input type="text" formControlName="artist" class="form-control" placeholder="Artist name">
            </div>

            <div class="mb-3">
              <label class="form-label">Album</label>
              <input type="text" formControlName="album" class="form-control" placeholder="Album name (optional)">
            </div>

            <div class="mb-3">
              <label class="form-label">Genre</label>
              <select formControlName="genre" class="form-select">
                <option value="">Select Genre</option>
                <option *ngFor="let g of genres" [value]="g">{{ g }}</option>
              </select>
            </div>

            <div class="mb-3">
              <label class="form-label">Release Date</label>
              <input type="date" formControlName="releaseDate" class="form-control">
            </div>

            <div class="mb-3">
              <label class="form-label">Music File</label>
              <input type="file" class="form-control" (change)="onFileChange($event)" accept="audio/*">
            </div>

            <button type="submit" class="btn btn-success" [disabled]="musicForm.invalid || uploading">Upload</button>
            <span *ngIf="uploading" class="ms-2">Uploading...</span>

          </form>
        </div>
      </div>
    </div>
  `,
})
export class MusicUpload {
  musicForm: FormGroup<{
    title: FormControl<string>;
    artist: FormControl<string>;
    album: FormControl<string>;
    genre: FormControl<string>;
    releaseDate: FormControl<string>;
    musicFile: FormControl<File | null>;
  }>;

  selectedFile: File | null = null;
  uploading = false;

  genres: string[] = [
    'Pop', 'Rock', 'Hip Hop', 'Jazz', 'Classical', 'Electronic', 'Other'
  ];

  constructor(private fb: FormBuilder, private storage: Storage, private firestore: Firestore) {
    this.musicForm = this.fb.group({
      title: new FormControl('', { nonNullable: true, validators: Validators.required }),
      artist: new FormControl('', { nonNullable: true, validators: Validators.required }),
      album: new FormControl('', { nonNullable: true }),
      genre: new FormControl('', { nonNullable: true, validators: Validators.required }),
      releaseDate: new FormControl('', { nonNullable: true, validators: Validators.required }),
      musicFile: new FormControl<File | null>(null, { validators: Validators.required }),
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.musicForm.patchValue({ musicFile: this.selectedFile });
    }
  }

  async onSubmit() {
    if (!this.musicForm.valid || !this.selectedFile) return;

    this.uploading = true;

    try {
      // Create a unique storage path
      const filePath = `music/${Date.now()}_${this.selectedFile.name}`;
      const fileRef = ref(this.storage, filePath);

      // Upload file
      const task = uploadBytesResumable(fileRef, this.selectedFile);
      task.on('state_changed',
        snapshot => {},
        error => {
          console.error('Upload error:', error);
          this.uploading = false;
        },
        async () => {
          // Get download URL
          const downloadURL = await getDownloadURL(fileRef);

          // Save to Firestore
          await addDoc(collection(this.firestore, 'music'), {
            title: this.musicForm.value.title,
            artist: this.musicForm.value.artist,
            album: this.musicForm.value.album,
            genre: this.musicForm.value.genre,
            releaseDate: this.musicForm.value.releaseDate,
            fileURL: downloadURL,
            createdAt: new Date()
          });

          console.log('Music uploaded successfully!');
          this.musicForm.reset();
          this.selectedFile = null;
          this.uploading = false;
        }
      );

    } catch (err) {
      console.error('Error uploading music:', err);
      this.uploading = false;
    }
  }
}
