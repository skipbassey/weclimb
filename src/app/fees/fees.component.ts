import { Component, OnInit } from '@angular/core';
import { PlatformService } from 'src/services/platform.service';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: [
    './fees.component.scss',
    '../../theme/font.scss'
  ],
})
export class FeesComponent implements OnInit {

  mode = "";

  constructor(
    private platformService: PlatformService
  ) { }

  ngOnInit() {
    this.mode = this.platformService.getPlatform();
  }

}
