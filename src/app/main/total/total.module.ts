import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TotalComponent } from './total.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [TotalComponent],
  exports: [TotalComponent]
})
export class TotalModule {
}
