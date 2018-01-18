import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnChanges, DoCheck {
  @Input() data: any;
  bsm: number;
  general: number;
  normal: number;
  design: number;
  total: number;
  completeTotal: number;

  constructor(private fb: FormBuilder) {
  }

  ngOnChanges() {
    this.data.normal = this.fb.control(this.data.normal);
  }

  ngDoCheck () {
    this.bsm = 0;
    this.general = 0;
    this.normal = 0;
    this.design = 0;
    this.total = this.data.total.total | 0;
    this.completeTotal = 0;

    this.data.bsms.forEach((bsm: any) => {
      bsm.first.required.forEach((subject: any) =>
        this.bsm += subject.is_complete ? +subject.credit : 0
      );
      bsm.second.required.forEach((subject: any) =>
        this.bsm += subject.is_complete ? +subject.credit : 0
      );
    });
    this.data.generals.forEach((general: any) => {
      general.first.required.forEach((subject: any) =>
        this.general += subject.is_complete ? +subject.credit : 0
      );
      general.second.required.forEach((subject: any) =>
        this.general += subject.is_complete ? +subject.credit : 0
      );
    });
    this.data.majors.forEach((major: any) => {
      major.first.required.forEach((subject: any) => {
        this.normal += subject.is_complete ? +subject.credit : 0;
        this.design += subject.is_complete ? +subject.design_credit : 0;
      });
      major.first.electives.forEach((subject: any) => {
        this.normal += subject.is_complete ? +subject.credit : 0;
        this.design += subject.is_complete ? +subject.design_credit : 0;
      });
      major.second.required.forEach((subject: any) => {
        this.normal += subject.is_complete ? +subject.credit : 0;
        this.design += subject.is_complete ? +subject.design_credit : 0;
      });
      major.second.electives.forEach((subject: any) => {
        this.normal += subject.is_complete ? +subject.credit : 0;
        this.design += subject.is_complete ? +subject.design_credit : 0;
      });
    });
    this.completeTotal = this.bsm + this.general + this.normal + (+this.data.normal.value);
  }
}
