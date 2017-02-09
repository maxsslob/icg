import { Component, ElementRef, OnInit, AfterViewChecked, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

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
  constructor(elementRef: ElementRef, private _loc:Location) {
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
      console.log(currentPath);
      if(currentPath === '/services/landing' || currentPath === '/services/instagram' || currentPath === '/services/seo' || currentPath === '/services/context'){
        return false;
      }else{
        return true
      }
  }

  ngOnInit() {

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

    $('.call-btn').mouseenter(function(){
      $('.call-number-container').css('display', 'flex');
      $('.call-number-container').css('right', '0');
      $('.call-number-container').css('opacity', '1');
    });

    $('.call-number-container').mouseleave(function(){
      $(this).addClass('call-opacity-out');
      $(this).css('opacity', '0');
      $(this).hide();
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