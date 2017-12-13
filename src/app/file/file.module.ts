import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileRoutingModule } from './file-routing.module';
import { FileComponent } from './file.component';
import { FileControlBarModule } from '../shared/component/file-control-bar/file-control-bar.module';
import { BsmModule } from './bsm/bsm.module';
import { GeneralModule } from './general/general.module';
import { MajorModule } from './major/major.module';

@NgModule({
  imports: [
    CommonModule,
    FileRoutingModule,
    FileControlBarModule,
    BsmModule,
    GeneralModule,
    MajorModule
  ],
  declarations: [FileComponent]
})
export class FileModule { }
