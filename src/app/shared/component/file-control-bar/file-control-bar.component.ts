import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-file-control-bar',
  templateUrl: './file-control-bar.component.html',
  styleUrls: ['./file-control-bar.component.scss']
})
export class FileControlBarComponent implements OnInit {
  @Input() data: any;
  @Input() additionalSubjects: any;
  @Output() dataChange = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  save() {
    const result = {
      bsms: [
        {
          first: {required: [...this.data.bsms[0].first.required, ...this.additionalSubjects.bsms[0].first.required.map(form => form.value)]},
          second: {required: [...this.data.bsms[0].second.required, ...this.additionalSubjects.bsms[0].second.required.map(form => form.value)]}
        },
        {
          first: {required: [...this.data.bsms[1].first.required, ...this.additionalSubjects.bsms[1].first.required.map(form => form.value)]},
          second: {required: [...this.data.bsms[1].second.required, ...this.additionalSubjects.bsms[1].second.required.map(form => form.value)]}
        },
        {
          first: {required: [...this.data.bsms[2].first.required, ...this.additionalSubjects.bsms[2].first.required.map(form => form.value)]},
          second: {required: [...this.data.bsms[2].second.required, ...this.additionalSubjects.bsms[2].second.required.map(form => form.value)]}
        },
        {
          first: {required: [...this.data.bsms[3].first.required, ...this.additionalSubjects.bsms[3].first.required.map(form => form.value)]},
          second: {required: [...this.data.bsms[3].second.required, ...this.additionalSubjects.bsms[3].second.required.map(form => form.value)]}
        }
      ],
      generals: [
        {
          first: {required: [...this.data.generals[0].first.required, ...this.additionalSubjects.generals[0].first.required.map(form => form.value)]},
          second: {required: [...this.data.generals[0].second.required, ...this.additionalSubjects.generals[0].second.required.map(form => form.value)]}
        },
        {
          first: {required: [...this.data.generals[1].first.required, ...this.additionalSubjects.generals[1].first.required.map(form => form.value)]},
          second: {required: [...this.data.generals[1].second.required, ...this.additionalSubjects.generals[1].second.required.map(form => form.value)]}
        },
        {
          first: {required: [...this.data.generals[2].first.required, ...this.additionalSubjects.generals[2].first.required.map(form => form.value)]},
          second: {required: [...this.data.generals[2].second.required, ...this.additionalSubjects.generals[2].second.required.map(form => form.value)]}
        },
        {
          first: {required: [...this.data.generals[3].first.required, ...this.additionalSubjects.generals[3].first.required.map(form => form.value)]},
          second: {required: [...this.data.generals[3].second.required, ...this.additionalSubjects.generals[3].second.required.map(form => form.value)]}
        }
      ],
      majors: [
        {
          first: {
            required: [...this.data.majors[0].first.required, ...this.additionalSubjects.majors[0].first.required.map(form => form.value)],
            electives: [...this.data.majors[0].first.electives, ...this.additionalSubjects.majors[0].first.electives.map(form => form.value)]
          },
          second: {
            required: [...this.data.majors[0].second.required, ...this.additionalSubjects.majors[0].second.required.map(form => form.value)],
            electives: [...this.data.majors[0].second.electives, ...this.additionalSubjects.majors[0].second.electives.map(form => form.value)]
          }
        },
        {
          first: {
            required: [...this.data.majors[1].first.required, ...this.additionalSubjects.majors[1].first.required.map(form => form.value)],
            electives: [...this.data.majors[1].first.electives, ...this.additionalSubjects.majors[1].first.electives.map(form => form.value)]
          },
          second: {
            required: [...this.data.majors[1].second.required, ...this.additionalSubjects.majors[1].second.required.map(form => form.value)],
            electives: [...this.data.majors[1].second.electives, ...this.additionalSubjects.majors[1].second.electives.map(form => form.value)]
          }
        },
        {
          first: {
            required: [...this.data.majors[2].first.required, ...this.additionalSubjects.majors[2].first.required.map(form => form.value)],
            electives: [...this.data.majors[2].first.electives, ...this.additionalSubjects.majors[2].first.electives.map(form => form.value)]
          },
          second: {
            required: [...this.data.majors[2].second.required, ...this.additionalSubjects.majors[2].second.required.map(form => form.value)],
            electives: [...this.data.majors[2].second.electives, ...this.additionalSubjects.majors[2].second.electives.map(form => form.value)]
          }
        },
        {
          first: {
            required: [...this.data.majors[3].first.required, ...this.additionalSubjects.majors[3].first.required.map(form => form.value)],
            electives: [...this.data.majors[3].first.electives, ...this.additionalSubjects.majors[3].first.electives.map(form => form.value)]
          },
          second: {
            required: [...this.data.majors[3].second.required, ...this.additionalSubjects.majors[3].second.required.map(form => form.value)],
            electives: [...this.data.majors[3].second.electives, ...this.additionalSubjects.majors[3].second.electives.map(form => form.value)]
          }
        },
      ]
    };
    console.log(result);
  }

  load() {
    this.dataChange.emit(this.data);
  }
}
