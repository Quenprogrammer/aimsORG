import { Component } from '@angular/core';
import {HomeBlogs} from './home-blogs/home-blogs';
import {HomeEvent} from './home-event/home-event';
import {Testimonials} from './testimonials/testimonials';
import {SocialMedia} from './social-media/social-media';
import {HomeProducts} from './home-products/home-products';
import {Offers} from './offers/offers';
import {addDoc, collection, Firestore} from '@angular/fire/firestore';
import {UploadPost} from '../admin/post/upload-post';

@Component({
  selector: 'api-homepage',
  imports: [
    HomeBlogs,
    HomeEvent,
    Testimonials,
    SocialMedia,
    HomeProducts,
    Offers,
    UploadPost
  ],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {

}
