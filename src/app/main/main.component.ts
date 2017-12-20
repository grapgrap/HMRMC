import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  data: any;
  constructor() { }
  ngOnInit() {
    this.data = {
      total: {bsm: '', general: '', major: { normal: '', design: '' }},
      normal: '',
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
