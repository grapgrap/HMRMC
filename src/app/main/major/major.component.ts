import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-major',
  templateUrl: './major.component.html',
  styleUrls: [ './major.component.scss' ]
})
export class MajorComponent implements OnInit {
  mock: any;

  constructor() {
  }

  ngOnInit() {
    this.mock = [
      {
        first: {
          required: [
            {name: '대학수학1', credit: 3, design_credit: 3, is_complete: true},
            {name: '일반물리학1', credit: 3, design_credit: '', is_complete: false}
          ],
          electives: [
            {name: '대학수학1', credit: 3, is_complete: true},
            {name: '일반물리학1', credit: 3, is_complete: false},
            {name: '일반물리학2', credit: 3, is_complete: false}
          ]
        },
        second: {
          required: [
            {name: '대학수학1', credit: 3, design_credit: 3, is_complete: true},
            {name: '일반물리학1', credit: 3, design_credit: '', is_complete: false}
          ],
          electives: [
            {name: '대학수학1', credit: 3, is_complete: true},
            {name: '일반물리학1', credit: 3, is_complete: false},
            {name: '일반물리학2', credit: 3, is_complete: false}
          ]
        }
      },
      {
        first: {
          required: [
            {name: '대학수학1', credit: 3, design_credit: 3, is_complete: true},
            {name: '일반물리학1', credit: 3, design_credit: '', is_complete: false}
          ],
          electives: [
            {name: '대학수학1', credit: 3, is_complete: true},
            {name: '일반물리학1', credit: 3, is_complete: false},
            {name: '일반물리학2', credit: 3, is_complete: false}
          ]
        },
        second: {
          required: [
            {name: '대학수학1', credit: 3, design_credit: 3, is_complete: true},
            {name: '일반물리학1', credit: 3, design_credit: '', is_complete: false}
          ],
          electives: [
            {name: '대학수학1', credit: 3, is_complete: true},
            {name: '일반물리학1', credit: 3, is_complete: false},
            {name: '일반물리학2', credit: 3, is_complete: false}
          ]
        }
      },
    ];
  }

}
