import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { OnInit, AfterViewInit } from '@angular/core';
declare var $: any;
@Component({
    selector: 'app-slider',
    standalone: true,
    templateUrl: './slider.component.html',
    styleUrl: './slider.component.css',
    imports: [HeaderComponent]
})
export class SliderComponent implements OnInit, AfterViewInit{
  images = [
    'https://source.unsplash.com/random/1600x1600/?coding',
    'https://source.unsplash.com/random/1600x1600/?laptop',
    'https://source.unsplash.com/random/1600x1600/?technology',
    'https://source.unsplash.com/random/1600x1600/?nature',
    'https://source.unsplash.com/random/1600x1600/?mountain',
  ]
  ngAfterViewInit(): void {
    this.initSlickSlider();
  }

  initSlickSlider(): void {
    $('.slick-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots:true,
      responsive: [
        {
          breakpoint: 768, // Adjust breakpoint as needed
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576, // Adjust breakpoint as needed
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  }

  ngOnInit(): void {
  }

}
