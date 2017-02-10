import { Component, OnInit } from '@angular/core';

// FOR jQuery
declare var $:any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styles: []
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {        
     $(document).ready(function(){
        
        $("#landing-cases-slider").responsiveSlides({
          auto: true,
          pager: false,
          nav: true,
          speed: 1000,
        });
      });
  }

}
