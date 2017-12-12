import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from './general.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GeneralComponent],
  exports: [GeneralComponent]
})
export class GeneralModule { }
