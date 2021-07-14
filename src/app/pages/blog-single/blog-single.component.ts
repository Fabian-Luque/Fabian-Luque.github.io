import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.css']
})
export class BlogSingleComponent implements OnInit {
  
  profile : any = {
                  logo:"logo-black.png",
                  profile:"photographer"
            };

  page_banner : any = {
        title:"Blog Single",
        profile:"photographer",
  };

  constructor() { }

  ngOnInit(): void {
  }

}
