import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [
    NgForOf
  ],
  templateUrl: './blog.component.html'
})
export class BlogComponent {

  featuredPosts = [
    {
      img: 'assets/img/blog/grid/v1/01.jpg',
      category: 'Gadget reviews',
      date: 'October 13, 2024',
      title:
        'Discover how to maximize your productivity with these essential tech gadgets designed for the modern home office',
      link: 'blog-single-v1.html'
    }
  ];

  sideFeatured = [
    {
      img: 'assets/img/blog/grid/v1/02.jpg',
      date: 'October 10, 2024',
      title: 'Digital digest: News and views on the latest electronic products',
      link: 'blog-single-v1.html'
    },
    {
      img: 'assets/img/blog/grid/v1/03.jpg',
      date: 'September 29, 2024',
      title: 'Embracing connections: How modern technology bridges gaps and builds communities',
      link: 'blog-single-v1.html'
    },
    {
      img: 'assets/img/blog/grid/v1/04.jpg',
      date: 'September 17, 2024',
      title: 'Transform your home into a smart hub with the latest IoT',
      link: 'blog-single-v1.html'
    }
  ];

  gridPosts1 = [
    {
      img: 'assets/img/blog/grid/v1/05.jpg',
      category: 'Tech tips',
      date: 'September 11, 2024',
      title: 'Optimizing your workspace: The guide to an efficient and minimalist desk setup',
      link: 'blog-single-v1.html'
    },
    {
      img: 'assets/img/blog/grid/v1/06.jpg',
      category: 'Industry trends',
      date: 'September 5, 2024',
      title: 'Exploring the skies: The rise of drone photography and videography',
      link: 'blog-single-v1.html'
    },
    {
      img: 'assets/img/blog/grid/v1/07.jpg',
      category: 'IoT',
      date: 'August 23, 2024',
      title: 'Connecting the dots: How IoT technology is transforming everyday life',
      link: 'blog-single-v1.html'
    },
    {
      img: 'assets/img/blog/grid/v1/08.jpg',
      category: 'Buying guides',
      date: 'August 18, 2024',
      title: 'How to find the best deals and make secure transactions online',
      link: 'blog-single-v1.html'
    },
    {
      img: 'assets/img/blog/grid/v1/09.jpg',
      category: 'Gadget reviews',
      date: 'August 9, 2024',
      title: 'Top 10 electric kitchen appliances for modern homes',
      link: 'blog-single-v1.html'
    },
    {
      img: 'assets/img/blog/grid/v1/10.jpg',
      category: 'Gaming',
      date: 'July 27, 2024',
      title: 'Immersive worlds: A dive into the latest VR gear and experiences',
      link: 'blog-single-v1.html'
    }
  ];

  gridPosts2 = [
    {
      img: 'assets/img/blog/grid/v1/11.jpg',
      category: 'Tech news',
      date: 'July 16, 2024',
      title: 'Tap, pay, and go: Simplifying transactions with mobile payment solutions',
      link: 'blog-single-v1.html'
    },
    {
      img: 'assets/img/blog/grid/v1/12.jpg',
      category: 'Industry trends',
      date: 'July 8, 2024',
      title: 'The biggest prospects for the smartphone electronics industry',
      link: 'blog-single-v1.html'
    },
    {
      img: 'assets/img/blog/grid/v1/13.jpg',
      category: 'Product reviews',
      date: 'June 27, 2024',
      title: 'Future engineers start young: A review of the latest robotic kit for kids',
      link: 'blog-single-v1.html'
    },
    {
      img: 'assets/img/blog/grid/v1/14.jpg',
      category: 'Buying guides',
      date: 'June 19, 2024',
      title: 'A detailed guide to the latest smartphones on the market',
      link: 'blog-single-v1.html'
    }
  ];

  trendingPosts = [
    {
      img: 'assets/img/blog/grid/v1/th01.jpg',
      title: 'The role of philanthropy in building a better world'
    },
    {
      img: 'assets/img/blog/grid/v1/th02.jpg',
      title: 'The biggest prospects for the smart home electronics industry'
    },
    {
      img: 'assets/img/blog/grid/v1/th03.jpg',
      title: 'Behind-the-scenes stories from the world of iPhones'
    }
  ];
}
