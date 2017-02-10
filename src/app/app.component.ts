import { Component, ElementRef, OnInit, AfterViewChecked, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router'; 

// FOR jQuery
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, AfterViewChecked {
  title = 'app works!';

  elementRef: ElementRef;
  constructor(elementRef: ElementRef, private _loc:Location, private router: Router) {
    this.elementRef = elementRef;
  };

  getCurrentPath() {
      let currentPath = this._loc.path();
      if(currentPath === ''){
        return true;
      }else{
        return false
      }
  }

  getCurrentPathIsService() {
      let currentPath = this._loc.path();
      if(currentPath === '/services/landing' || currentPath === '/services/instagram' || currentPath === '/services/seo' || currentPath === '/services/context'){
        return false;
      }else{
        return true
      }
  }

  ngOnInit() {

    // SCROLL TO TOP ON ROUTER CHANGE
    this.router.events.subscribe((evt) => {
      if(!(evt instanceof NavigationEnd)){
        return;
      }
      document.body.scrollTop = 0;
    })

    $("#nav-container").click(function() {
      $(this).addClass("pushed");
      $(this).css('color', '#fff');
      $('.menu').addClass('menu-opened');
      setTimeout(function(){$('.menu-open-darken').show();}, 200);
    });

    // HIDE MENU WHEN CLICKING ON MENU ITEMS
    $('.menu-container nav ul li a').click(function(){
      $("#nav-container").removeClass("pushed");
      $('.menu').removeClass('menu-opened');
      $("#nav-container").css('color', '#010101');
      $('.menu-open-darken').hide();
    });

    // HIDE MENU WHEN MOUSE LEAVES THE MENU
    $('.menu-open-darken').mouseover(function(){
      $("#nav-container").removeClass("pushed");
      $('.menu').removeClass('menu-opened');
      $("#nav-container").css('color', '#010101');
      $('.menu-open-darken').hide();
    });

    $('.call-btn').mouseover(function(){
      $('.call-number-container').css('display', 'flex');
      $('.call-number-container').css('right', '0');
      $('.call-number-container').css('opacity', '1');
    });

    $('.call-number-container').mouseleave(function(){
      setTimeout(function(){$('.call-number-container').fadeOut();}, 5000);
    });

    

  }

  ngAfterViewChecked() {        
      $(document).ready(function(){
        function scrollToAnchor(){
        var aTag = $("a[name='"+ 'formAnchor' +"']");
          $('html,body').animate({scrollTop: aTag.offset().top},'500');
        }

        $('.anchor').click(function(){
          scrollToAnchor();
        })
      });  
    } 
}