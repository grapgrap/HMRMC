import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MajorComponent } from './major.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MajorComponent],
  exports: [MajorComponent]
})
export class MajorModule { }
