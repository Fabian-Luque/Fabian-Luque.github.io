import { Component, OnInit, Input } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-fun-fact-counter',
  templateUrl: './fun-fact-counter.component.html',
  styleUrls: ['./fun-fact-counter.component.css']
})
export class FunFactCounterComponent implements OnInit {

  @Input() data:any;
  
  constructor() { }

  ngOnInit(): void {
		(function ($) {
      
      setTimeout(function(){
        jQuery('.counter').counterUp({
          delay: 10,
          time: 3000
        });
      }, 500);  
      
		})(jQuery);
	}

}
