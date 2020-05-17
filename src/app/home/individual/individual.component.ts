import { Component, OnInit } from '@angular/core';
import { PlatformService } from 'src/services/platform.service';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: [
    './individual.component.scss',
    '../../../theme/font.scss',
    '../../../theme/button.scss'
  ],
})
export class IndividualComponent implements OnInit {

  mode = "";

  constructor(
    private platformService: PlatformService
  ) { }

  ngOnInit() {
    this.mode = this.platformService.getPlatform();
  }

}
