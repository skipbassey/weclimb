import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu-routing.module';
@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        MenuRoutingModule
      ],
      declarations: [MenuComponent]
})
export class MenuModule {}