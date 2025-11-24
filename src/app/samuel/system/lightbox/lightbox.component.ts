import {Component, EventEmitter, Input, OnInit, Output, signal, WritableSignal} from '@angular/core';
import {CdkMenu, CdkMenuItem, CdkMenuTrigger} from "@angular/cdk/menu";
import {NgClass} from "@angular/common";
import {ImagePreloaderDirective} from './image-preloader.directive';


export enum MediaType {
  video,
  photo
}

export interface MediaItem {
  type: MediaType,
  url: string,
}

@Component({
  selector: 'kib-lightbox',
  standalone: true,
  imports: [
    CdkMenuTrigger,
    CdkMenu,
    CdkMenuItem,
    NgClass,
    ImagePreloaderDirective
  ],
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.css'
})
export class LightboxComponent implements OnInit {

  @Input({required: true}) images: MediaItem[] = [];
  @Input({required: true}) isOpen = false;
  @Input({required: true}) currentImageIndex = 0;
  @Output() hasClosed = new EventEmitter<void>();
  total: WritableSignal<number> = signal(0);

  ngOnInit(): void {
    this.total.set(this.images.length);
    // this.images = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(c => `/assets/img${c}.jpg`);
    //this.open(2);
  }


  /*open(index: number) {
    this.isOpen = true;
    this.currentImageIndex = index;
  }*/

  close() {
    this.isOpen = false;
    this.hasClosed.emit();
  }

  next() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  prev() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  protected readonly MediaType = MediaType;
}
