import { Component, OnInit } from '@angular/core';
import { PlatformService } from 'src/services/platform.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: [
    './career.component.scss',
    '../../../theme/font.scss',
    '../../../theme/button.scss'
  ],
})
export class CareerComponent implements OnInit {

  mode = "";

  constructor(
    private platformService: PlatformService
  ) { }

  ngOnInit() {
    this.mode = this.platformService.getPlatform();
  }

}
