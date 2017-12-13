import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileControlBarComponent } from './file-control-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  declarations: [FileControlBarComponent],
  exports: [FileControlBarComponent]
})
export class FileControlBarModule { }
