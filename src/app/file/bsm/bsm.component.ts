import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-bsm',
  templateUrl: './bsm.component.html',
  styleUrls: ['./bsm.component.scss', '../file.component.scss']
})
export class BsmComponent implements OnInit {
  @Input() bsms: Array<any>;
  @Input() additionalSubjects: Array<any>;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  addSubject(grade, semester, type) {
    if (semester === 'first') {
      if (type === 'required') {
        this.additionalSubjects[grade].first.required.push(this.fb.group({name: '', credit: ''}));
      }
    } else if (semester === 'second') {
      if (type === 'required') {
        this.additionalSubjects[grade].second.required.push(this.fb.group({name: '', credit: ''}));
      }
    }
  }
  deleteSubject(grade, index, semester, type, isAdditional) {
    if (isAdditional) {
      if (semester === 'first') {
        if (type === 'required') {
          this.additionalSubjects[grade].first.required.splice(index, 1);
        }
      } else if (semester === 'second') {
        if (type === 'required') {
          this.additionalSubjects[grade].second.required.splice(index, 1);
        }
      }
    } else {
      if (semester === 'first') {
        if (type === 'required') {
          this.bsms[grade].first.required.splice(index, 1);
        }
      } else if (semester === 'second') {
        if (type === 'required') {
          this.bsms[grade].second.required.splice(index, 1);
        }
      }
    }
  }
}
