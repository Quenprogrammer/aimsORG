import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-events',
  imports: [
    ReactiveFormsModule
  ],
  template: `
    <div class="col-lg-9">
      <div class="ps-lg-3 ps-xl-0">

        <!-- Page title + Add list button-->


        <!-- Master checkbox + Action buttons -->
        <div class="nav align-items-center mb-4">
          <div class="form-checkl nav-link animate-underline fs-lg ps-0 pe-2 py-2 mt-n1 me-4" data-master-checkbox="{&quot;container&quot;: &quot;#wishlistSelection&quot;, &quot;label&quot;: &quot;Select all&quot;, &quot;labelChecked&quot;: &quot;Unselect all&quot;, &quot;showOnCheck&quot;: &quot;#action-buttons&quot;}">
            <input type="checkbox" class="form-check-input" id="wishlist-master" checked="">
            <label for="wishlist-master" class="form-check-label animate-target mt-1 ms-2">Unselect all</label>
          </div>
          <div class="d-flex flex-wrap" id="action-buttons">
            <a class="nav-link animate-underline px-0 pe-sm-2 py-2 me-4" href="#!">
              <i class="ci-shopping-cart fs-base me-2"></i>
              <span class="animate-target d-none d-md-inline">Add to cart</span>
            </a>
            <a class="nav-link animate-underline px-0 pe-sm-2 py-2 me-4" href="#!">
              <i class="ci-repeat fs-base me-2"></i>
              <span class="animate-target d-none d-md-inline">Relocate</span>
            </a>
            <a class="nav-link animate-underline px-0 py-2" href="#!">
              <i class="ci-trash fs-base me-1"></i>
              <span class="animate-target d-none d-md-inline">Remove selected</span>
            </a>
          </div>
        </div>


        <!-- Wishlist items (Grid) -->
        <div class="row row-cols-1 row-cols-md-3 g-4" id="wishlistSelection">

          <!-- Item -->
          <div class="col">
            <div class="product-card animate-underline hover-effect-opacity bg-body rounded">
              <div class="position-relative">
                <div class="position-absolute top-0 end-0 z-1 pt-1 pe-1 mt-2 me-2">
                  <div class="form-check fs-lg">
                    <input type="checkbox" class="form-check-input select-card-check" checked="">
                  </div>
                </div>
                <a class="d-block rounded-top overflow-hidden p-3 p-sm-4" href="shop-product-general-electronics.html">
                  <span class="badge bg-danger position-absolute top-0 start-0 mt-2 ms-2 mt-lg-3 ms-lg-3">-21%</span>
                  <div class="ratio" style="--cz-aspect-ratio: calc(240 / 258 * 100%)">
                    <img src="assets/img/shop/electronics/01.png" alt="VR Glasses">
                  </div>
                </a>
              </div>
              <div class="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                <div class="d-flex align-items-center gap-2 mb-2">
                  <div class="d-flex gap-1 fs-xs">
                    <i class="ci-star-filled text-warning"></i>
                    <i class="ci-star-filled text-warning"></i>
                    <i class="ci-star-filled text-warning"></i>
                    <i class="ci-star-filled text-warning"></i>
                    <i class="ci-star text-body-tertiary opacity-75"></i>
                  </div>
                  <span class="text-body-tertiary fs-xs">(123)</span>
                </div>
                <h3 class="pb-1 mb-2">
                  <a class="d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
                    <span class="animate-target">VRB01 Virtual Reality Glasses</span>
                  </a>
                </h3>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="h5 lh-1 mb-0">$340.99 <del class="text-body-tertiary fs-sm fw-normal">$430.00</del></div>
                  <button type="button" class="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
                    <i class="ci-shopping-cart fs-base animate-target"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
    <form [formGroup]="eventForm" (ngSubmit)="submitEvent()" enctype="multipart/form-data" class="p-4 border rounded shadow-sm">

      <h3 class="mb-4 text-center">Upload Event</h3>

      <!-- Event Title -->
      <div class="mb-3">
        <label for="title" class="form-label">Event Title</label>
        <input type="text" id="title" formControlName="title" class="form-control" placeholder="Enter event title" required>
      </div>

      <!-- Event Description -->
      <div class="mb-3">
        <label for="description" class="form-label">Event Description</label>
        <textarea id="description" formControlName="description" class="form-control" rows="4" placeholder="Enter event description" required></textarea>
      </div>

      <!-- Event Image -->
      <div class="mb-3">
        <label for="image" class="form-label">Event Image</label>
        <input type="file" id="image" (change)="onImageSelected($event)" class="form-control" accept="image/*" required>
        <div *ngIf="previewImage" class="mt-2 text-center">
          <img [src]="previewImage" alt="Preview" class="img-thumbnail" style="max-height: 200px;">
        </div>
      </div>

      <!-- Event Link -->
      <div class="mb-3">
        <label for="link" class="form-label">Event Link</label>
        <input type="url" id="link" formControlName="link" class="form-control" placeholder="Enter event URL">
      </div>

      <!-- Event Date -->
      <div class="mb-3">
        <label for="date" class="form-label">Event Date</label>
        <input type="date" id="date" formControlName="date" class="form-control" required>
      </div>

      <!-- Event Time -->
      <div class="mb-3">
        <label for="time" class="form-label">Event Time</label>
        <input type="time" id="time" formControlName="time" class="form-control" required>
      </div>

      <!-- Event Location -->
      <div class="mb-3">
        <label for="location" class="form-label">Event Location</label>
        <input type="text" id="location" formControlName="location" class="form-control" placeholder="Enter event location">
      </div>

      <!-- Event Category -->
      <div class="mb-3">
        <label for="category" class="form-label">Event Category</label>
        <select id="category" formControlName="category" class="form-select">
          <option value="" disabled selected>Select category</option>
          <option value="conference">Conference</option>
          <option value="workshop">Workshop</option>
          <option value="webinar">Webinar</option>
          <option value="concert">Concert</option>
          <option value="meetup">Meetup</option>
        </select>
      </div>

      <!-- Submit Button -->
      <div class="text-center">
        <button type="submit" class="btn btn-primary w-50" [disabled]="eventForm.invalid">Upload Event</button>
      </div>

    </form>

  `,
  styles:``
})
export class Events {
  eventForm: FormGroup;
  previewImage: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: [null, Validators.required],
      link: [''],
      date: ['', Validators.required],
      time: ['', Validators.required],
      location: [''],
      category: [''],
    });
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.eventForm.patchValue({ image: file });
      this.eventForm.get('image')?.updateValueAndValidity();

      const reader = new FileReader();
      reader.onload = () => {
        this.previewImage = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  submitEvent() {
    if (this.eventForm.valid) {
      console.log(this.eventForm.value);
      // Handle submission, e.g., send to Firebase or backend API
    }
  }
}
