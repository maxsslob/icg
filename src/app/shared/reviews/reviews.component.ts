import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styles: []
})
export class ReviewsComponent implements OnInit {

 serviceName: string = "instagram";
 reviews = [
   {
     name: 'Наталья Бабкевич',
     title: 'ДИРЕКТОР СТУДИИ ДИЗАЙНА НОГТЕЙ',
     review: 'Хотим сказать большое спасибо работникам компании ICG за отличную работу по продвижению нашего профиля VIZZG Nail Studio. Результат не заставил себя долго ждать, а ещё очень порадовало внимательное отношение с вопросами "как ваши дела?" "Все ли хорошо?" И "все ли устраивает в нашей работе?? Все хорошо! Все устраивает! И дела отлично)))) Обязательно продолжим наше сотрудничество'
   },
   {
     name: 'Юрий Костевич',
     title: 'ФОТОГРАФ',
     review: 'Спасибо за продвижение инстаграма kostevichphoto.by. Понравился деловой подход. Руслан, респект персональный. Остался доволен результатами и планирую дальнейшее сотрудничество. Цена -качество также порадовало. Рекомендую.'
   }
 ];

   constructor(router: Router) { 
      router.events.subscribe((url:any) => console.log(url));
      if(router.url === '/services/instagram'){
        this.serviceName =  'instagram';
        
      }; 
      if(router.url === '/services/seo'){
        this.serviceName =  'seo';

      }; 
      if(router.url === '/services/context'){
        this.serviceName =  'context';

      };
      if(router.url === '/services/landing'){
        this.serviceName =  'landing';

      };
  }

  ngOnInit() {
  }

}
