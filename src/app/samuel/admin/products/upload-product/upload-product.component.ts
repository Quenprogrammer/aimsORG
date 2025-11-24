import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import { CustomizationComponent } from './customization/customization.component';


// Firestore imports
import {
  Firestore,
  collection,
  addDoc,
  doc,
  updateDoc,
  DocumentReference,
} from '@angular/fire/firestore';
import { PropertyVideoSectionComponent } from './property-video-section/property-video-section.component';
import { PropertyImagesSectionComponent } from './property-images-section/property-images-section.component';
import { UploadImagesComponent } from './property-images-section/upload-images/upload-images.component';
import { CoverImageComponent } from './property-images-section/cover-image/cover-image.component';
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
  selector: 'lh-upload-product',
  standalone: true,
  imports: [
    NgForOf,
    ReactiveFormsModule,
    CustomizationComponent,
    NgIf,
    PropertyVideoSectionComponent,
    PropertyImagesSectionComponent,
    UploadImagesComponent,
    CoverImageComponent,
  ],
  templateUrl: './upload-product.component.html',
  styleUrls: ['./upload-product.component.scss'],
})
export class UploadProductComponent implements OnInit {
  imageUrls: string[] = []; // <-- NEW PROPERTY

  productForm!: FormGroup;
  private productDocId!: string;
  private productRef!: DocumentReference;

  // loading states
  isCreating = false;
  isUpdating = false;

  constructor(private fb: FormBuilder, private firestore: Firestore) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productID: [''],
      name: ['', { validators: [Validators.required], updateOn: 'blur' }],
      basePrice: [0, { validators: [Validators.required], updateOn: 'blur' }],
      description: [
        '',
        { validators: [Validators.required], updateOn: 'blur' },
      ],
      collection: ['', { updateOn: 'blur' }],
      brand: ['', { updateOn: 'blur' }],
      categories: this.fb.array([], { updateOn: 'blur' }),
      tags: this.fb.array([], { updateOn: 'blur' }),
      images: this.fb.array([], { updateOn: 'blur' }),
      customFields: this.fb.array([], { updateOn: 'blur' }),
      specifications: this.fb.array([], { updateOn: 'blur' }),
      video: ['', { updateOn: 'blur' }], // ✅ added
    });

    this.createBlankProduct();
  }

  // ----- Firestore -----
  private async createBlankProduct() {
    this.isCreating = true;
    try {
      const productsRef = collection(this.firestore, 'testproducts');

      const blankProduct: Product = {
        productID: '',
        name: '',
        basePrice: 0,
        description: '',
        collection: '',
        brand: '',
        categories: [],
        tags: [],
        images: [], // ✅ always initialize
        customFields: [],
        specifications: [], // ✅ FIXED name (was specificationsFields)
        video: '', // ✅ always initialize
      };


      const docRef = await addDoc(productsRef, blankProduct);
      this.productDocId = docRef.id;
      this.productRef = docRef;

      await updateDoc(docRef, { productID: this.productDocId } as any);
      this.productForm.patchValue({ productID: this.productDocId });

      // Auto-update Firestore when form changes
      this.productForm.valueChanges.subscribe(async (value: Product) => {
        if (this.productDocId) {
          this.isUpdating = true;
          try {
            await updateDoc(this.productRef, value as any);
          } finally {
            this.isUpdating = false;
          }
        }
      });
    } catch (error) {
      console.error('❌ Error creating blank product:', error);
    } finally {
      this.isCreating = false;
    }
  }

  // ----- Getters -----
  get categories(): FormArray {
    return this.productForm.get('categories') as FormArray;
  }
  get tags(): FormArray {
    return this.productForm.get('tags') as FormArray;
  }
  get images(): FormArray {
    return this.productForm.get('images') as FormArray;
  }
  get customFields(): FormArray {
    return this.productForm.get('customFields') as FormArray;
  }

  // ----- Custom Fields -----
  addCustomField() {
    const group = this.fb.group({
      key: ['', { validators: [Validators.required], updateOn: 'blur' }],
      value: ['', { validators: [Validators.required], updateOn: 'blur' }],
    });
    this.customFields.push(group);
  }

  removeCustomField(index: number) {
    this.customFields.removeAt(index);
  }

  // ----- Manual Save -----
  async saveProduct() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    this.isUpdating = true;
    try {
      const product: Product = this.productForm.value;
      await updateDoc(this.productRef, product as any);
      console.log('✅ Product manually saved:', product);
    } catch (error) {
      console.error('❌ Error saving product:', error);
    } finally {
      this.isUpdating = false;
    }
  }
  handleVideoUpdate(event: { $event: any; fieldName: string }) {
    const value = event.$event?.target?.value ?? null;

    // Update reactive form
    this.productForm.patchValue({ [event.fieldName]: value });

    // Update Firestore directly
    if (this.productRef) {
      this.isUpdating = true;
      updateDoc(this.productRef, { [event.fieldName]: value })
        .then(() => console.log(`✅ ${event.fieldName} updated`))
        .catch((err) =>
          console.error(`❌ Error updating ${event.fieldName}`, err)
        )
        .finally(() => (this.isUpdating = false));
    }
  }
  updateImages(event: { $event: string[]; fieldName: string }) {
    const newImages = event.$event;
    console.log('Updated images in UploadProductComponent:', newImages);

    // ✅ Update local property so preview updates
    this.imageUrls = [...newImages];

    // ✅ Update reactive form so Angular detects changes
    this.productForm.patchValue({
      images: [...newImages],
    });

    // ✅ Save to Firestore if document exists
    if (this.productRef) {
      this.isUpdating = true;
      updateDoc(this.productRef, { [event.fieldName]: newImages })
        .then(() => console.log(`✅ ${event.fieldName} updated in Firestore`))
        .catch((err) =>
          console.error(`❌ Error updating ${event.fieldName}`, err)
        )
        .finally(() => (this.isUpdating = false));
    }
  }
  showCustomization = false;
  get specifications(): FormArray {
    return this.productForm.get('specifications') as FormArray;
  }

  addSpecification(): void {
    const group = this.fb.group({
      key: ['', Validators.required],
      value: ['', Validators.required],
    });
    this.specifications.push(group);
  }

  removeSpecification(index: number): void {
    this.specifications.removeAt(index);
  }

}
