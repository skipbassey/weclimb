import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
// import * as fs from 'fs';

@Component({
  selector: 'app-outreach',
  templateUrl: './outreach.component.html',
  styleUrls: [
    './outreach.component.scss',
    '../../theme/font.scss',
    '../../../node_modules/swiper/css/swiper.min.css'
  ],
})
export class OutreachComponent implements OnInit {

  testFolder = '/assets'

   mySwiper = new Swiper('.swiper-container', {
      speed: 400,
      spaceBetween: 100,
      grabCursor: true,
      iOSEdgeSwipeDetection: true,
      preloadImages: true
    });

  slideOpts = {

    
    init: true
  };

  constructor() { }

  ngOnInit() {
    this.getPhotos()
  }

  getPhotos(): void {
    // fs.readdir(this.testFolder, (err, files) => {
    //   files.forEach(file => {
    //     console.log(file);
    //   });
    // });
  }

  next() {
    
  }
}
