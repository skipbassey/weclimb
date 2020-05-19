import { NgModule } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({

  imports: [
    MatExpansionModule,
    MatTooltipModule
  ],
  exports: [
    MatExpansionModule,
    MatTooltipModule
  ]
 
})
export class MaterialModule {}
