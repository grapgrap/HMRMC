import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bsm',
  templateUrl: './bsm.component.html',
  styleUrls: ['./bsm.component.scss']
})
export class BsmComponent implements OnInit {
  mock: any;

  constructor() { }

  ngOnInit() {
    this.mock = [
      {
        first: [
          { name: '대학수학1', credit: 3, is_complete: true},
          { name: '일반물리학1', credit: 3, is_complete: false}
        ],
        second: ['영어읽기와 쓰기', '현대사회와 기술', '세계문화이 이해']
      },
      {
        first: [],
        second: ['리더십과 커뮤니케이션']
      },
      {
        first: [],
        second: []
      },
      {
        first: ['기초회계학'],
        second: ['법률과 생활', '재무공학']
      }
    ];
  }

}
