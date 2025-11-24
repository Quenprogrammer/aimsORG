import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[img-preloader]',
  standalone: true,
  host: {
    '[attr.src]': 'finalImage'    //the attribute of the host element we want to update. in this case, <img 'src' />
  },
})
export class ImagePreloaderDirective implements OnInit {
  @Input('img-preloader') targetSource?: string|null;

  downloadingImage : any; // In class holder of remote image
  finalImage: any; //property bound to our host attribute.

  // Set an input so the directive can set a default image.
  @Input() defaultImage : string =  '/assets/tibet-realty/placeholder-property-card.svg';

  //ngOnInit is needed to access the @inputs() variables. these aren't available on constructor()
  constructor(private elementRef: ElementRef) {}
  ngOnInit() {
    this.finalImage = this.defaultImage;
    setTimeout(()=>{

      //First set the final image to some default image while we prepare our preloader:


      this.downloadingImage = new Image(); // create image object
      this.downloadingImage.onload = () => {
        //Once image is completed, console.log confirmation and switch our host attribute
        console.log('image downloaded');
        this.finalImage = this.targetSource; //do the switch 😀
        // Add a class to the host element to apply fading effect
        this.elementRef.nativeElement.classList.add('fade-in');
      };
      // Assign the src to that of some_remote_image_url. Since its an Image Object the
      // on assignment from this.targetSource download would start immediately in the background
      // and trigger the onload()
      this.downloadingImage.src = this.targetSource;

    },300);
  }

}
