import { Injectable } from '@angular/core';

export interface Option {
  title: string;
  icon: string;
  description: string;
  route: string;
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  options: Option[] = [
    {
      title: 'Home',
      icon: 'person',
      description: "Home Page",
      route: 'home'
    },
    {
      title: 'Team',
      icon: 'person',
      description: "Team Page",
      route: 'team'
    },
    {
      title: 'School Services',
      icon: 'person',
      description: "School Page",
      route: 'school-based-services'
    },
    {
      title: 'Outreach',
      icon: 'person',
      description: "Outreach Page",
      route: 'outreach'
    },
    {
      title: 'Forms',
      icon: 'person',
      description: "Forms Page",
      route: 'forms'
    },
    {
      title: 'Fees',
      icon: 'person',
      description: "Fees Page",
      route: 'fees'
    },
    {
      title: 'Appointments',
      icon: 'person',
      description: "Appointment Page",
      route: 'appointments'
    }
  ];

  title = '';

  constructor() { }

  getOptions(): Option[] {
    return this.options
  }

  setTitle(title: string) {
    this.title = title;
  }

  getTitle(): string {
    return this.title;
  }
}
