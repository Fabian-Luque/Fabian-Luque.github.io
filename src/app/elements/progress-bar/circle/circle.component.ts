import { Component, OnInit, Input } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
declare  var jQuery:  any;


@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
	  (function ($) {
       
       


       
      jQuery('.radial-progress').each(function( index, value ) { 
        jQuery(this).find(jQuery('circle.complete')).removeAttr( 'style' );
      });
      
      
    jQuery(window).scroll(function(){
        jQuery('svg.radial-progress').each(function( index, value ) {
            // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
            if ( 
                jQuery(window).scrollTop() > jQuery(this).offset().top - (jQuery(window).height() * 0.75) &&
                jQuery(window).scrollTop() < jQuery(this).offset().top + jQuery(this).height() - (jQuery(window).height() * 0.25)
            ) {
                // Get percentage of progress
                var percent = jQuery(value).data('percentage');
                console.log(value)
                console.log(percent+"----------")
                // Get radius of the svg's circle.complete
                var radius = jQuery(this).find(jQuery('circle.complete')).attr('r');
                // Get circumference (2πr)
                var circumference = 2 * Math.PI * radius;
                // Get stroke-dashoffset value based on the percentage of the circumference
                var strokeDashOffset = circumference - ((percent * circumference) / 100);
               
                // Transition progress for 1.25 seconds
                jQuery(this).find(jQuery('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
            }
        });
    }).trigger('scroll');
       
       
       
       
       
       
    })(jQuery);
  
  
  
  
  
  
  
  }

}
