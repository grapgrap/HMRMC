import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { TotalModule } from './total/total.module';

@NgModule({
  imports: [
    CommonModule,
    TotalModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }
