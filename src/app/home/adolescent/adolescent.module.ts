import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AdolescentComponent } from '../adolescent/adolescent.component'

@NgModule({
    declarations: [AdolescentComponent],
    imports: [
      CommonModule,
      IonicModule,
      RouterModule.forChild([ {path: 'counseling/adolescent', component: AdolescentComponent}])
    ]
})

export class AdolescentModule {}