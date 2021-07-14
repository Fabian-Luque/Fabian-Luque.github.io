import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-icon-box',
  templateUrl: './icon-box.component.html',
  styleUrls: ['./icon-box.component.css']
})
export class IconBoxComponent implements OnInit {


  icon_box : any = [
                  {
                    title:"ubicación",
                    description:"Carahue, Chile",
                    icon_class:"la-map-marker",
                  },
                  {
                    title:"Correo",
                    description:'<a href="javascript:void(0);">fabianluque2014@gmail.com</a>',
                    icon_class:"la-envelope-open",
                  },
                  {
                    title:"Teléfono",
                    description:"(+56) 9 7475 7107",
                    icon_class:"la-phone-volume",
                  },
            ];

  constructor() { }


  ngOnInit(): void {
  }

}
