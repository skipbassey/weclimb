import { Component, OnInit } from '@angular/core';
import { PlatformService } from 'src/services/platform.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: [
    './school.component.scss',
    '../../theme/font.scss'
  ],
})
export class SchoolComponent implements OnInit {

  mode = "";
  constructor(
    private platformService: PlatformService
  ) { }

  ngOnInit() {
    this.mode = this.platformService.getPlatform();
  }

}
