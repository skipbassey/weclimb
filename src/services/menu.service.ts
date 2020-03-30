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
      title: 'Team',
      icon: 'people',
      description: "Team Page",
      route: 'team'
    },
    {
      title: 'School Services',
      icon: 'school',
      description: "School Page",
      route: 'school-based-services'
    },
    {
      title: 'Outreach',
      icon: 'globe',
      description: "Outreach Page",
      route: 'outreach'
    },
    {
      title: 'Forms',
      icon: 'document',
      description: "Forms Page",
      route: 'forms'
    },
    {
      title: 'Fees',
      icon: 'card',
      description: "Fees Page",
      route: 'fees'
    },
    {
      title: 'Appointments',
      icon: 'calendar',
      description: "Appointment Page",
      route: 'appointments'
    }, 
    {
      title: 'Profile',
      icon: 'person',
      description: "Profile",
      route: 'profile'
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
