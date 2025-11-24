import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';

import {NgClass, NgForOf} from "@angular/common";
 import {imageSectionType} from "../property-images-section.component";
import {CdkDrag, CdkDropList, CdkDropListGroup} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-re-order-images',
  standalone: true,
  imports: [
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    NgForOf,
    NgClass
  ],
  template: `
      <!--<div class="row mb-lg-0 pb-2 ">
          <div class="row gap-2 m-n2 ps-2 pt-2 p-0" style=" width: 100%">
              @for (item of imageUrls;track item;let i = $index) {
                  <div [style]="showSmall?'padding: 0;  height: 10rem; width: 48.2%':'padding: 0;  height: 15rem; width: 24.2%'"
                       (click)="setSelected(i)">
                      <img [ngClass]="selectedIndex1===i+1?'opacity-50':''"
                           style="object-fit: cover; height: 100%; width: 100%"
                           [src]=" item "/>

                  </div>

              }
              <button type="button" (click)="shuffle()"
                      class="col    embed-responsive-1by1 btn-block btn btn-outline-primary border">
                  <small class="mt-4">Shuffle</small>
              </button>

          </div>
          <button (click)="
          onUpdateField.emit({$event:{target:{value:imageUrls}},fieldName:fieldName!});
          changeImageSection.emit(imageSectionType.preview)" type="button"
                  class="col-auto mt-3  embed-responsive-1by1 btn-block btn btn-primary border">
              <small class="mt-4"> Done</small>
          </button>

          <button (click)="changeImageSection.emit(imageSectionType.preview)" type="button"
                  class="col-auto mt-3 ms-1 embed-responsive-1by1 btn-block btn btn-outline-primary border">
              <small class="mt-4"> Cancel</small>
          </button>
      </div>-->


  `,
  styles: `

  img {
  transition: opacity 0.5s;
}

img:hover {
  opacity: 0.5;
}

.re-order-image-box {
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;
  z-index: 1;
  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
  0 2px 2px 0 rgba(0, 0, 0, 0.14),
  0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.re-order-image:hover {
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
  0 8px 10px 1px rgba(0, 0, 0, 0.14),
  0 3px 14px 2px rgba(0, 0, 0, 0.12);
  opacity: .6;
}

  `
})
export class ReOrderImagesComponent {
  @ViewChild(CdkDropListGroup) listGroup?: CdkDropListGroup<CdkDropList>;
  @Input({required: true}) imageUrls: string[] = [];
  @Input({required: true}) fieldName: string | undefined;
  @Input() showSmall: boolean = false;
  @Output() changeImageSection = new EventEmitter<imageSectionType>();
  @Output() onUpdateField = new EventEmitter<{ $event: any, fieldName: string }>();
  protected readonly imageSectionType = imageSectionType;


  selectedIndex1: number | undefined;
  selectedIndex2: number | undefined;

  makeMove() {
    if (this.selectedIndex1 !== undefined && this.selectedIndex2 !== undefined) {
      console.log('making the move', this.selectedIndex1, this.selectedIndex2);
      this.moveItemInArray(
        this.imageUrls ?? [],
        this.selectedIndex1 - 1,
        this.selectedIndex2 - 1
      );
      this.selectedIndex1 = undefined;
      this.selectedIndex2 = undefined;
    }
  }

  setSelected(index: number) {
    if (this.selectedIndex1 === undefined) {
      this.selectedIndex1 = index + 1;
    } else if (
      this.selectedIndex2 === undefined &&
      this.selectedIndex1 !== index + 1
    ) {
      this.selectedIndex2 = index + 1;
    }

    console.log("Selected index", this.selectedIndex1, this.selectedIndex2);

    if (this.selectedIndex1 !== undefined && this.selectedIndex2 !== undefined) {
      this.makeMove();
    }
  }

  moveItemInArray<T>(array: T[], fromIndex: number, toIndex: number): void {
    if (
      fromIndex < 0 ||
      fromIndex >= array.length ||
      toIndex < 0 ||
      toIndex >= array.length
    ) {
      console.error("Invalid indices provided for moving item in array.");
      return;
    }

    const [itemToMove] = array.splice(fromIndex, 1);
    array.splice(toIndex, 0, itemToMove);
  }

  shuffle() {
    this.imageUrls.sort(function () {
      return .5 - Math.random();
    });
  }
}
