import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs = [];
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogs = this.blogService.getBlogs();
  }

}
