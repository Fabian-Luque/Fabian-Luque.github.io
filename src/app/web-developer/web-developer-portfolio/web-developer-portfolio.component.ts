import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-web-developer-portfolio',
  templateUrl: './web-developer-portfolio.component.html',
  styleUrls: ['./web-developer-portfolio.component.css']
})
export class WebDeveloperPortfolioComponent implements OnInit {

  profile : any = {
                  logo:"logo.png",
                  profile:"web-developer"
            };

  page_banner : any = {
        title:"Portfolio",
        profile:"web-developer",
  };

  categories : any = [
    {
      title:"Desarrollo",
      filter_title:"Development",
    },
    {
      title:"App",
      filter_title:"App",
    },
    {
      title:"Bot",
      filter_title:"Bot",
    },
  ];

  portfolios : any = [
    {
      title:"Veleta metrics",
      category:"Development",
      image:"veletra.png",
      src_image:"veletra.png",
      link:"javascript:vois(0)",
      filter_class:"Development",
    },
    {
      title:"Bot Giveaways",
      category:"Bot",
      image:"bot-giveaways.png",
      src_image:"bot-giveaways.png",
      link:"javascript:vois(0)",
      filter_class:"Bot",
    },
    {
      title:"Rubik-Dev",
      category:"Development",
      image:"rubik-dev.png",
      src_image:"main-pic3.jpg",
      link:"javascript:vois(0)",
      filter_class:"Development",
    },
  ]


  constructor() { }

  ngOnInit(): void {
	  (function ($) {

      setTimeout(function(){
        var self = jQuery("#masonry, .masonry");
        if(jQuery('.card-container').length)
          {
          self.imagesLoaded(function () {
            self.masonry({
              gutterWidth: 15,
              isAnimated: true,
              itemSelector: ".card-container"
            });
          });
        }

        jQuery(".filters").on('click','li',function(e) {

          var filter = jQuery(this).attr("data-filter");
          self.masonryFilter({
            filter: function () {
              if (!filter) return true;
              return jQuery(this).hasClass(filter);
            }
          });
        });
      }, 500);


    })(jQuery);

  }

}


