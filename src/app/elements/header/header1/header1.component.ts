import { Component, OnInit,Input } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {

  @Input() data:any;
  
  constructor() { }

  ngOnInit(): void {
	  (function ($) {
      
      
       /* setTimeout(function(){ */
        	var screenWidth = jQuery( window ).width();
        jQuery('.menu-btn').on('click', function(){
          jQuery('.menu-btn').toggleClass('active');
          jQuery('.header-nav').toggleClass('active');
        });
        
        if(screenWidth < 999)
        {
          jQuery('.menu-btn').removeClass('active');
          jQuery('.header-nav').removeClass('active');
        }
     /* }, 500) */;
        
        
    })(jQuery);
  
  }
  
  menu_item : any = [
                {
                  title:"home",
                  link: "index",
                  class:"ti-home"
                },
                {
                  title:"about-us",
                  link: "about-us",
                  class:"ti-info-alt"
                },
                {
                  title:"resume",
                  link: "resume",
                  class:"ti-user"
                },
                {
                  title:"portfolio",
                  link: "portfolio",
                  class:"ti-layout-grid2"
                },
                {
                  title:"contact-us",
                  link: "contact-us",
                  class:"ti-headphone-alt"
                },
            ];
            
            /* menuFun(event: any) {
              jQuery('.header-nav, .menu-btn').toggleClass('active');
              console.log(jQuery(this));
            } */

}
