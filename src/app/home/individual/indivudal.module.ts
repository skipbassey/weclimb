import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { IndividualComponent } from './individual.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([ {path: 'counseling/individual', component: IndividualComponent }])
    ],
    declarations: [IndividualComponent]
})

export class IndividualModule { }