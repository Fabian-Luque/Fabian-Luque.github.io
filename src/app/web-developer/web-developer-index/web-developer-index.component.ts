import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
declare  var jQuery:  any;
declare  var chinese:  any;

@Component({
  selector: 'app-web-developer-index',
  templateUrl: './web-developer-index.component.html',
  styleUrls: ['./web-developer-index.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WebDeveloperIndexComponent implements OnInit {

  profile : any = {
                  logo:"logo.png",
                  profile:"web-developer"
            };

   member : any = {
        image:"",
        logo:"avatar.png",
        designation:"Desarrollador",
        age:"24",
        dob:"",
        residence:"",
        address:"",
        email:"",
        phone:"",
        skype:"",
        whatsapp:"",
        about_me:"",
        intrests:"",
        name:"Fabian Luque",
        study:"",
        highes_degree:"",
        profile:"web-developer"
  };


  constructor() { }

  ngOnInit(): void {
	  (function ($) {
      /* setTimeout(function(){ */



            var c : any = document.getElementById("c");
            var ctx = c.getContext("2d");

            //making the canvas full screen
            c.height = window.innerHeight;
            c.width = window.innerWidth;

            //chinese characters - taken from the unicode charset
            var chinese1 = "df65g4ad6hgadh331687hat646n4f644865g6satfd5h4asr6tynm4s9yfj8";
            //converting the string into an array of single characters
            var chinese = chinese1.split("");

            var font_size = 14;
            var columns = c.width/font_size; //number of columns for the rain
            //an array of drops - one per column
            var drops = [];
            //x below is the x coordinate
            //1 = y co-ordinate of the drop(same for every drop initially)
            for(var x = 0; x < columns; x++)
              drops[x] = 1;

            //drawing the characters
            function draw()
            {
              //Black BG for the canvas
              //translucent BG to show trail
              ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
              ctx.fillRect(0, 0, c.width, c.height);

              ctx.fillStyle = "#766100"; //green text
              ctx.font = font_size + "px arial";
              //looping over drops
              for(var i = 0; i < drops.length; i++)
              {
                //a random chinese character to print
                var text = chinese[Math.floor(Math.random()*chinese.length)];
                //x = i*font_size, y = value of drops[i]*font_size
                ctx.fillText(text, i*font_size, drops[i]*font_size);

                //sending the drop back to the top randomly after it has crossed the screen
                //adding a randomness to the reset to make the drops scattered on the Y axis
                if(drops[i]*font_size > c.height && Math.random() > 0.975)
                  drops[i] = 0;

                //incrementing Y coordinate
                drops[i]++;
              }
            }

            setInterval(draw, 33);







      /* }, 500);   */

  })(jQuery);

  }

}
