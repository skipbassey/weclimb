import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PlatformService } from 'src/services/platform.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: [
    './team.component.scss',
    '../../theme/font.scss'],
})
export class TeamComponent implements OnInit {

  mode = "";

  constructor(
    private navController: NavController,
    private platformService: PlatformService
  ) { }

  ngOnInit() {
    this.mode = this.platformService.getPlatform();
  }

  back() {
    this.navController.pop();
    this.navController.navigateBack('home')
  }

}
