import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-blog',
  templateUrl: './our-blog.component.html',
  styleUrls: ['./our-blog.component.css']
})
export class OurBlogComponent implements OnInit {
  blogsTab: any = [{
    id: 1, title: "blog1", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.", date:"14,11,2023"
  },
  {
    id: 2, title: "blog1", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.", date:"14,11,2023"
  },
]
  constructor() { }

  ngOnInit() {
  }

}
