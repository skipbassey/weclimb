import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { PictureService } from 'src/services/picture.service';
import { PlatformService } from 'src/services/platform.service';
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

  photos: string[] = [];

  mode = "";

  slideOpts = {

    initialSlide: this.photos.length,
    init: true,
    pager: true,
    mode: "ios"
  };

  constructor(
    private pictureService: PictureService,
    private platoformService: PlatformService
    ) { }

  ngOnInit() {
    this.getPhotos();
    this.mode = this.platoformService.getPlatform();
  }

  getPhotos(): void {
    this.photos = this.pictureService.getPhotos();
  }

}
