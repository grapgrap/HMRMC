import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss', '../file.component.scss']
})
export class GeneralComponent implements OnInit {
  @Input() generals: Array<any>;
  @Input() additionalSubjects: Array<any>;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  addSubject(grade, semester, type) {
    if (semester === 'first') {
      if (type === 'required') {
        this.additionalSubjects[grade].first.required.push(this.fb.group({name: '', credit: ''}));
      }
    } else if (semester === 'second') {
      if (type === 'required') {
        this.additionalSubjects[grade].second.required.push(this.fb.group({name: '', credit: ''}));
      }
    }
  }
}
