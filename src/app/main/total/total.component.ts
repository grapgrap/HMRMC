import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {
  tableHeaders: Array<string>;

  constructor() { }

  ngOnInit() {
    this.tableHeaders = ['구분', '공학인증기준', '공학인증기준(설계)', '이수학점', '이수학점(설계)', '잔여학점', '잔여학점(설계)'];
  }

}
