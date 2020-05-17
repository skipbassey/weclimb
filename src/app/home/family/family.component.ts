import { Component, OnInit } from '@angular/core';
import { PlatformService } from 'src/services/platform.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: [
    './family.component.scss',
    '../../../theme/font.scss',
    '../../../theme/button.scss'
  ],
})
export class FamilyComponent implements OnInit {

  mode = "";

  constructor(
    private platformService: PlatformService
  ) { }

  ngOnInit() {
    this.mode = this.platformService.getPlatform();
  }

}
