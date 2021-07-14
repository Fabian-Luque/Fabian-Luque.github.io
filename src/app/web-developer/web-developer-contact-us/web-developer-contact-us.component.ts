import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-web-developer-contact-us',
  templateUrl: './web-developer-contact-us.component.html',
  styleUrls: ['./web-developer-contact-us.component.css']
})
export class WebDeveloperContactUsComponent implements OnInit {

  profile : any = {
                  logo:"logo-black.png",
                  profile:"web-developer"
            };

  page_banner : any = {
        title:"Contáctame",
        profile:"web-developer",
  };

  constructor() { }

    ngOnInit(): void {
      (function ($) {
        setTimeout(function(){
            if(jQuery('.dezPlaceAni').length) {

              $('.dezPlaceAni input, .dezPlaceAni textarea').on('focus',function(){
                $(this).parents('.form-group, .news-box').addClass('focused');
              });

              $('.dezPlaceAni input, .dezPlaceAni textarea').on('blur',function(){
                var inputValue = $(this).val();
                if ( inputValue == "" ) {
                $(this).removeClass('filled');
                $(this).parents('.form-group, .news-box').removeClass('focused');
                } else {
                $(this).addClass('filled');
                }
              })
            }
        }, 500);
      })(jQuery);

    }

}
