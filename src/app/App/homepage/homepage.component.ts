import { Component } from '@angular/core';
import {Faq} from '../faq/faq';
import {Blog} from '../../samuel/blog/blog';
import {Events} from '../../samuel/events/events';
import {Homepage} from '../../samuel/homepage/homepage';
import {Products} from '../../samuel/products/products';
import {Post} from '../../samuel/admin/post/post';
import {Menu} from '../../samuel/admin/menu/menu';

@Component({
  selector: 'app-homepage',
  imports: [
    Faq,
    Blog,
    Events,
    Homepage,
    Products,
    Post,
    Menu
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
