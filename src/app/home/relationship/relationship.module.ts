import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { RelationshipComponent } from './relationship.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([ {path: 'counseling/relationship', component: RelationshipComponent }])
    ],
    declarations: [RelationshipComponent]
})

export class RelationshipModule { }