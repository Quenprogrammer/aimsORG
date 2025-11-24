import { Component } from '@angular/core';
import {Faq} from '../faq/faq';
import {Blog} from '../../samuel/blog/blog';
import {Events} from '../../samuel/events/events';
import {Homepage} from '../../samuel/homepage/homepage';
import {Products} from '../../samuel/products/products';
import {Post} from '../../samuel/admin/post/post';
import {Menu} from '../../samuel/admin/menu/menu';
import {MusicUpload} from '../../samuel/admin/music-upload';
import {UploadPost} from '../../samuel/admin/post/upload-post';
import {Inbox} from '../../samuel/admin/inbox';
import {Users} from '../../samuel/admin/users';
import {UserRegistration} from '../../samuel/user-registration/user-registration';

@Component({
  selector: 'app-homepage',
  imports: [
    Faq,
    Blog,
    Events,
    Homepage,
    Products,
    Post,
    Menu,
    MusicUpload,
    UploadPost,
    Inbox,
    Users,
    UserRegistration
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
