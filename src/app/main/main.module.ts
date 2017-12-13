import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { TotalModule } from './total/total.module';
import { BsmModule } from './bsm/bsm.module';
import { GeneralModule } from './general/general.module';
import { MajorModule } from './major/major.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FileControlBarModule } from '../shared/component/file-control-bar/file-control-bar.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FileControlBarModule,
    TotalModule,
    BsmModule,
    GeneralModule,
    MajorModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }
