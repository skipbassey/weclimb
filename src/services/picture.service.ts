import { Injectable } from '@angular/core';

@Injectable()
export class PictureService {

    photos: string[] = [
        "/assets/img/outreach1.png",
        "/assets/img/outreach2.png",
        "/assets/img/outreach3.png",
        "/assets/img/outreach4.png",
        "/assets/img/outreach5.png",
        "/assets/img/outreach6.png",
        "/assets/img/outreach7.png",
        "/assets/img/outreach8.png",
        "/assets/img/outreach9.png",
        "/assets/img/outreach10.png",
        "/assets/img/outreach11.png",
        "/assets/img/outreach12.png"
    ]

    getPhotos(): string[] {
        return this.photos
    }
}