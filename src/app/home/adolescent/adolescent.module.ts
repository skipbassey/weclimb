import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AdolescentComponent } from '../adolescent/adolescent.component'
import { PlatformService } from 'src/services/platform.service';

@NgModule({
    declarations: [AdolescentComponent],
    imports: [
      CommonModule,
      IonicModule,
      RouterModule.forChild([ {path: 'counseling/adolescent', component: AdolescentComponent}])
    ]
})

export class AdolescentModule implements OnInit {
  mode = "";

  constructor(
    private platformService: PlatformService
  ) {}

  ngOnInit() {
    this.mode = this.platformService.getPlatform();
  }
}