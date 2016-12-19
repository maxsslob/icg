import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  constructor() { }
  
  lat: number = 53.939813;
  lng: number = 27.467358;
  zoom: number = 13;
  scrollwheel: boolean = false;

  ngOnInit() {
  }

}
