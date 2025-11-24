import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'lh-customization',
  imports: [NgForOf, ReactiveFormsModule, NgIf],
  templateUrl: './customization.component.html',
  styleUrl: './customization.component.scss',
})
export class CustomizationComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      basePrice: [null, [Validators.required, this.nonZeroValidator()]],
      specifications: this.fb.array([]),
    });
  }

  // ✅ Custom Validator (no zero or negative numbers allowed)
  nonZeroValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (value !== null && value <= 0) {
        return { nonZero: true };
      }
      return null;
    };
  }

  get specs(): FormArray {
    return this.productForm.get('specifications') as FormArray;
  }

  addSpec() {
    const spec = this.fb.group({
      name: ['', Validators.required],
      type: ['dropdown', Validators.required], // dropdown | text | price
      customText: [''], // for text+price
      extraPrice: [null, this.nonZeroValidator()], // for text+price and price-only
      options: this.fb.array([]), // for dropdown
    });
    this.specs.push(spec);
  }

  removeSpec(index: number) {
    this.specs.removeAt(index);
  }

  addOption(specIndex: number) {
    const options = this.specs.at(specIndex).get('options') as FormArray;
    options.push(
      this.fb.group({
        label: ['', Validators.required],
        price: [null, this.nonZeroValidator()],
      })
    );
  }

  removeOption(specIndex: number, optionIndex: number) {
    const options = this.specs.at(specIndex).get('options') as FormArray;
    options.removeAt(optionIndex);
  }

  saveProduct() {
    if (this.productForm.valid) {
      console.log('✅ Product with specs:', this.productForm.value);
      // TODO: Save to Firestore or API
    } else {
      console.warn('❌ Form Invalid');
      this.productForm.markAllAsTouched();
    }
  }

  getOptionsControl(i: number): FormArray {
    return this.specs.at(i).get('options') as FormArray;
  }

}
