import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  profile : any = {
                  logo:"logo-black.png",
                  profile:"photographer"
            };

  page_banner : any = {
        title:"Blog",
        profile:"photographer",
  };

  constructor() { }

  ngOnInit(): void {
  }

}
