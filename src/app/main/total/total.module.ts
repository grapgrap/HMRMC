import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalComponent } from './total.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TotalComponent],
  exports: [TotalComponent]
})
export class TotalModule { }
