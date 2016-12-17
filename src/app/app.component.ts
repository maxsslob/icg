import { Component, ElementRef, OnInit } from '@angular/core';
declare var jQuery:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  elementRef: ElementRef;
  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
  };

  ngOnInit() {
    jQuery("#nav-container").click(function() {
      jQuery(this).toggleClass("pushed");
    });
  }
}