import { Component } from '@angular/core';
import {BlogVideoSections} from './blog-video-sections/blog-video-sections';
import {BlogPosts} from './blog-posts/blog-posts';
import {LatestBlog} from './latest-blog/latest-blog';

@Component({
  selector: 'app-blog',
  imports: [
    BlogVideoSections,
    BlogPosts,
    LatestBlog
  ],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {

}
