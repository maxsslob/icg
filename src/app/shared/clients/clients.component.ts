import { Component, OnInit } from '@angular/core';

// FOR jQuery
declare var $:any;

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styles: []
})
export class ClientsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {        
     $(document).ready(function(){
        
        $("#clients-slider").responsiveSlides({
          auto: true,
          pager: false,
          nav: true,
          speed: 1000,
        });
      });
  }

}
