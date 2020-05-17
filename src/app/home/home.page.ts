import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Option {
  title: string;
  data: string[]
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
      data: [
        "Blending Family Adjustments",
        "Behavioral Issues",
        "Academic Concerns in Children",
        "Divorce & Divorce Adjustments",
        "Grief Counseling"
      ]
    },
    {
      title: 'Family Counseling',
      data: [
        "Blending Family Adjustments",
        "Behavioral Issues",
        "Academic Concerns in Children",
        "Divorce & Divorce Adjustments",
        "Grief Counseling"
      ]
    },
    {
      title: 'Adolescent Counseling',
      data: [
        "Anger Management",
        "Self-Harming & Suicidal Behaviors",
        "Oppositional Defiant Behaviors",
        "ADD & ADHD",
        "Bullying",
        "Individualized Educational Plan (IEP)",
        "504 Plan",
        "Trauma",
        "Coping Skills"
      ]
    },
    {
      title: 'Individual Counseling',
      data: [
        "Depression",
        "Anxiety & Stress Management",
        "Self-Esteem Issues",
        "Underachievement",
        "Anger Management",
        "Spiritual Issues",
        "Crisis Intervention",
        "Trauma/PTSD",
        "Grief",
        "Divorce Adjustment",
        "Coping Skills"
      ]
    },
    {
      title: 'Career Counseling',
      data: [
          "Career Counseling & Guidance",
          "Career Interest Assessment",
          "Choosing/Changing Majors",
          "Changing Career Paths",
          "Resume & Cover Letter Writing"
      ]
    } 
  ]

  constructor(
    private router: Router,
  ) {}

}
