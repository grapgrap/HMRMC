import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bsm',
  templateUrl: './bsm.component.html',
  styleUrls: ['./bsm.component.scss']
})
export class BsmComponent implements OnInit {
  @Input() bsms: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
