import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsmComponent } from './bsm.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [BsmComponent],
  exports: [BsmComponent]
})
export class BsmModule { }
