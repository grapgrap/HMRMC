import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  @Input() generals: Array<any>;

  constructor() { }

  ngOnInit() {
  }
}
