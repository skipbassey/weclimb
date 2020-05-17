import { Component, OnInit } from '@angular/core';
import { PlatformService } from 'src/services/platform.service';

@Component({
  selector: 'app-relationship',
  templateUrl: './relationship.component.html',
  styleUrls: [
    './relationship.component.scss',
    '../../../theme/font.scss',
    '../../../theme/button.scss'
  ],
})
export class RelationshipComponent implements OnInit {

  mode = "";

  constructor(
    private platformService: PlatformService
  ) { }

  ngOnInit() {
    this.mode = this.platformService.getPlatform();
  }

}
