import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-major',
  templateUrl: './major.component.html',
  styleUrls: ['./major.component.scss', '../file.component.scss']
})
export class MajorComponent implements OnInit {
  mock: any;
  additionalSubjects: any;
  majorForm: FormGroup;


  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.mock = [
      {
        first: {
          required: [],
          electives: [
            {name: '대학수학1', credit: 3, design_credit: 3},
            {name: '일반물리학1', credit: 3, design_credit: 3},
            {name: '일반물리학2', credit: 3, design_credit: 3}
          ]
        },
        second: {
          required: [
            {name: '대학수학1', credit: 3, design_credit: 3},
            {name: '일반물리학1', credit: 3, design_credit: ''}
          ],
          electives: [
            {name: '대학수학1', credit: 3, design_credit: 3},
            {name: '일반물리학1', credit: 3, design_credit: 3},
            {name: '일반물리학2', credit: 3, design_credit: 3}
          ]
        }
      },
      {
        first: {
          required: [],
          electives: [
            {name: '대학수학1', credit: 3, design_credit: 3},
            {name: '일반물리학1', credit: 3, design_credit: 3},
            {name: '일반물리학2', credit: 3, design_credit: 3}
          ]
        },
        second: {
          required: [
            {name: '대학수학1', credit: 3, design_credit: 3},
            {name: '일반물리학1', credit: 3, design_credit: ''}
          ],
          electives: [
            {name: '대학수학1', credit: 3, design_credit: 3},
            {name: '일반물리학1', credit: 3, design_credit: 3},
            {name: '일반물리학2', credit: 3, design_credit: 3}
          ]
        }
      },
      {
        first: {
          required: [],
          electives: [
            {name: '대학수학1', credit: 3, design_credit: 3},
            {name: '일반물리학1', credit: 3, design_credit: 3},
            {name: '일반물리학2', credit: 3, design_credit: 3}
          ]
        },
        second: {
          required: [
            {name: '대학수학1', credit: 3, design_credit: 3},
            {name: '일반물리학1', credit: 3, design_credit: ''}
          ],
          electives: [
            {name: '대학수학1', credit: 3, design_credit: 3},
            {name: '일반물리학1', credit: 3, design_credit: 3},
            {name: '일반물리학2', credit: 3, design_credit: 3}
          ]
        }
      },
      {
        first: {
          required: [],
          electives: [
            {name: '대학수학1', credit: 3, design_credit: 3},
            {name: '일반물리학1', credit: 3, design_credit: 3},
            {name: '일반물리학2', credit: 3, design_credit: 3}
          ]
        },
        second: {
          required: [
            {name: '대학수학1', credit: 3, design_credit: 3},
            {name: '일반물리학1', credit: 3, design_credit: ''}
          ],
          electives: [
            {name: '대학수학1', credit: 3, design_credit: 3},
            {name: '일반물리학1', credit: 3, design_credit: 3},
            {name: '일반물리학2', credit: 3, design_credit: 3}
          ]
        }
      },
    ];
    this.additionalSubjects = [
      {first: {required: [], electives: []}, second: {required: [], electives: []}},
      {first: {required: [], electives: []}, second: {required: [], electives: []}},
      {first: {required: [], electives: []}, second: {required: [], electives: []}},
      {first: {required: [], electives: []}, second: {required: [], electives: []}},
    ];

    this.majorForm = this.fb.group({

    });
  }

  addSubject(grade, semester, type) {
    if (semester === 'first') {
      if (type === 'required') {
        this.additionalSubjects[grade].first.required.push({name: '', credit: '', design_credit: ''});
      } else if (type === 'electives') {
        this.additionalSubjects[grade].first.electives.push({name: '', credit: '', design_credit: ''});
      }
    } else if (semester === 'second') {
      if (type === 'required') {
        this.additionalSubjects[grade].second.required.push({name: '', credit: '', design_credit: ''});
      } else if (type === 'electives') {
        this.additionalSubjects[grade].second.electives.push({name: '', credit: '', design_credit: ''});
      }
    }
  }
}
