import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router';

import {InstagramComponent } from '../../instagram/instagram.component';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styles: []
})
export class ContactFormComponent implements OnInit {
  serviceName: string = "instagram";
  serviceHeader: string = "ОСТАВЬТЕ ЗАЯВКУ СЕЙЧАС";

   constructor(router: Router) { 
      router.events.subscribe((url:any) => console.log(url));
      if(router.url === '/services/instagram'){
        this.serviceName =  'instagram';
        this.serviceHeader = "МЫ ЗАСТАВИМ INSTAGRAM РАБОТАТЬ НА ВАС";
      }; 
      if(router.url === '/services/seo'){
        this.serviceName =  'seo';
        this.serviceHeader = "НАЧНИТЕ ПРОДВИГАТЬ ВАШ САЙТ УЖЕ СЕЙЧАС";
      }; 
      if(router.url === '/services/context'){
        this.serviceName =  'context';
        this.serviceHeader = "СТАНЬТЕ ЛИДЕРОМ ТЕМАТИКИ С НАМИ";
      };
      if(router.url === '/services/landing'){
        this.serviceName =  'landing';
        this.serviceHeader = "НАЧНИТЕ ПРОДАВАТЬ С НАМИ!";
      };
  }


  ngOnInit() {
  }

}
