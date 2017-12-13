import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsmComponent } from './bsm.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BsmComponent],
  exports: [BsmComponent]
})
export class BsmModule { }
