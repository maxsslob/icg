import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router';

// FOR jQuery
declare var $:any;

import { Client }    from './client.model';
import {InstagramComponent } from '../../instagram/instagram.component';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styles: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  serviceName: string = "instagram";
  serviceHeader: string = "ОСТАВЬТЕ ЗАЯВКУ СЕЙЧАС";

  

  model = new Client(1, '', '', '');

  submitted = false;

  onSubmit() { this.submitted = true;}

  reset() { this.model = new Client(1, '', '') }

  get diagnostic(){ return JSON.stringify(this.model); }

   constructor(router: Router) {

     
    
      router.events.subscribe((url:any) => console.log(url));
      if(router.url.startsWith('/services/instagram')){
        this.serviceName =  'instagram';
        this.serviceHeader = "МЫ ЗАСТАВИМ INSTAGRAM РАБОТАТЬ НА ВАС";
      }; 
      if(router.url.startsWith('/services/seo')){
        this.serviceName =  'seo';
        this.serviceHeader = "НАЧНИТЕ ПРОДВИГАТЬ ВАШ САЙТ УЖЕ СЕЙЧАС";
      }; 
      if(router.url.startsWith('/services/context')){
        this.serviceName =  'context';
        this.serviceHeader = "СТАНЬТЕ ЛИДЕРОМ ТЕМАТИКИ С НАМИ";
      };
      if(router.url.startsWith('/services/landing')){
        this.serviceName =  'landing';
        this.serviceHeader = "НАЧНИТЕ ПРОДАВАТЬ С НАМИ!";
      };
  }


  ngOnInit() {
    $(document).ready(function(){
      $('#phone').mask('+375(99)999-99-99');
    });
    

    $('#contactForm').submit(function(){
      var name = $(this).find('input[name=name]');
		  var phone = $(this).find('input[name="phone"]');
		  var email = $(this).find('input[name="email"]');
		  var comments = $(this).find('textarea[name="comments"]');
      var service = $(this).find('input[name="service"]');

			$.post($(this).prop('action'), $(this).serialize(), function(res) {			
			}, 'json');
			
			return false
    })
  }

}
