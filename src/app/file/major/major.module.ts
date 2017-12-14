import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MajorComponent } from './major.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [MajorComponent],
  exports: [MajorComponent]
})
export class MajorModule { }
