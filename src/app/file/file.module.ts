import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FileControlBarModule } from '../shared/component/file-control-bar/file-control-bar.module';
import { BsmModule } from './bsm/bsm.module';
import { FileRoutingModule } from './file-routing.module';
import { FileComponent } from './file.component';
import { GeneralModule } from './general/general.module';
import { MajorModule } from './major/major.module';
import { TotalModule } from './total/total.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FileRoutingModule,
    FileControlBarModule,
    TotalModule,
    BsmModule,
    GeneralModule,
    MajorModule
  ],
  declarations: [FileComponent]
})
export class FileModule {
}
