import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit, OnChanges {
  @Input() total: any;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.total.general = this.fb.control(this.total.general);
    this.total.bsm = this.fb.control(this.total.bsm);
    this.total.major.normal = this.fb.control(this.total.major.normal);
    this.total.major.design = this.fb.control(this.total.major.design);
  }
}
