import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  data: any;
  additionalSubjects: any;

  constructor() { }

  ngOnInit() {
    this.data = {
      total: {bsm: '', general: '', major: { normal: '', design: '' }},
      bsms: [
        {first: {required: []}, second: {required: []}},
        {first: {required: []}, second: {required: []}},
        {first: {required: []}, second: {required: []}},
        {first: {required: []}, second: {required: []}},
      ],
      generals: [
        {first: {required: []}, second: {required: []}},
        {first: {required: []}, second: {required: []}},
        {first: {required: []}, second: {required: []}},
        {first: {required: []}, second: {required: []}},
      ],
      majors: [
        {first: {required: [], electives: []}, second: {required: [], electives: []}},
        {first: {required: [], electives: []}, second: {required: [], electives: []}},
        {first: {required: [], electives: []}, second: {required: [], electives: []}},
        {first: {required: [], electives: []}, second: {required: [], electives: []}},
      ]
    };
    this.additionalSubjects = {
      bsms: [
        {first: {required: []}, second: {required: []}},
        {first: {required: []}, second: {required: []}},
        {first: {required: []}, second: {required: []}},
        {first: {required: []}, second: {required: []}},
      ],
      generals: [
        {first: {required: []}, second: {required: []}},
        {first: {required: []}, second: {required: []}},
        {first: {required: []}, second: {required: []}},
        {first: {required: []}, second: {required: []}},
      ],
      majors: [
        {first: {required: [], electives: []}, second: {required: [], electives: []}},
        {first: {required: [], electives: []}, second: {required: [], electives: []}},
        {first: {required: [], electives: []}, second: {required: [], electives: []}},
        {first: {required: [], electives: []}, second: {required: [], electives: []}},
      ]
    };
  }

}
