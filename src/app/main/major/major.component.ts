import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-major',
  templateUrl: './major.component.html',
  styleUrls: [ './major.component.scss' ]
})
export class MajorComponent implements OnInit {
  @Input() majors: Array<any>;

  constructor() {
  }

  ngOnInit() {
  }

}
