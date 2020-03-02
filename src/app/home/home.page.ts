import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Option {
  title: string;
  route: string;
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss', '../../theme/font.scss'],
})
export class HomePage {

  services: Option[] = [
    {
      title: 'Relationship Counseling',
      route: 'counseling/relationship'
    },
    {
      title: 'Family Counseling',
      route: 'counseling/family'
    },
    {
      title: 'Adolescent Counseling',
      route: 'counseling/adolescent'
    },
    {
      title: 'Individual Counseling',
      route: 'counseling/individual'
    },
    {
      title: 'Career Counseling',
      route: 'counseling/career'
    } 
  ]

  constructor(
    private router: Router
  ) {}

  ionViewWillEnter() {
    console.log("Will enter");
  }

  ionViewDidEnter(){
    console.log("ionViewDidEnter")
}

  navigate(service: Option) {
    this.router.navigateByUrl(service.route)
    
  }

}
