import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  mock: any;

  constructor() { }

  ngOnInit() {
    this.mock = [
      {
        first: [
          { name: '영어 읽기와 이해', credit: 2, is_complete: true},
          { name: '공학글쓰기 및 발표', credit: 2, is_complete: false}
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
