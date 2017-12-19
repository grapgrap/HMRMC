import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-major',
  templateUrl: './major.component.html',
  styleUrls: ['./major.component.scss', '../file.component.scss']
})
export class MajorComponent implements OnInit {
  @Input() majors: Array<any>;
  @Input() additionalSubjects: Array<any>;


  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  addSubject(grade, semester, type) {
    if (semester === 'first') {
      if (type === 'required') {
        this.additionalSubjects[grade].first.required.push(this.fb.group({name: '', credit: '', design_credit: ''}));
      } else if (type === 'electives') {
        this.additionalSubjects[grade].first.electives.push(this.fb.group({name: '', credit: '', design_credit: ''}));
      }
    } else if (semester === 'second') {
      if (type === 'required') {
        this.additionalSubjects[grade].second.required.push(this.fb.group({name: '', credit: '', design_credit: ''}));
      } else if (type === 'electives') {
        this.additionalSubjects[grade].second.electives.push(this.fb.group({name: '', credit: '', design_credit: ''}));
      }
    }
  }

  deleteSubject(grade, index, semester, type, isAdditional) {
    if (isAdditional) {
      if (semester === 'first') {
        if (type === 'required') {
          this.additionalSubjects[grade].first.required.splice(index, 1);
        } else if (type === 'electives') {
          this.additionalSubjects[grade].first.electives.splice(index, 1);
        }
      } else if (semester === 'second') {
        if (type === 'required') {
          this.additionalSubjects[grade].second.required.splice(index, 1);
        } else if (type === 'electives') {
          this.additionalSubjects[grade].second.electives.splice(index, 1);
        }
      }
    } else {
      if (semester === 'first') {
        if (type === 'required') {
          this.majors[grade].first.required.splice(index, 1);
        }  else if (type === 'electives') {
          this.majors[grade].first.electives.splice(index, 1);
        }
      } else if (semester === 'second') {
        if (type === 'required') {
          this.majors[grade].second.required.splice(index, 1);
        } else if (type === 'electives') {
          this.majors[grade].second.electives.splice(index, 1);
        }
      }
    }
  }
}
