import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: [
    './team.component.scss',
    '../../theme/font.scss'],
})
export class TeamComponent implements OnInit {

  constructor(
    private navController: NavController
  ) { }

  ngOnInit() {}

  back() {
    this.navController.pop();
    this.navController.navigateBack('home')
  }

}
