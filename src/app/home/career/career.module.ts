import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CareerComponent } from './career.component'

@NgModule({
  declarations: [CareerComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([ {path: 'counseling/career', component: CareerComponent}])
  ]
})
export class CareerModule { }
