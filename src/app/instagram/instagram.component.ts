import { Component, OnInit } from '@angular/core';

// FOR jQuery
declare var $:any;

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styles: []
})
export class InstagramComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {        
     $(document).ready(function(){
        
        $("#clients-slider").responsiveSlides({
          auto: true,
          pager: false,
          nav: true,
          speed: 500,
        });
      });
  }

}
