import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { isUndefined } from 'util';

@Component({
  selector: 'app-file-control-bar',
  templateUrl: './file-control-bar.component.html',
  styleUrls: ['./file-control-bar.component.scss']
})
export class FileControlBarComponent implements OnInit {
  @Input() data: any;
  @Input() additionalSubjects: any;
  @Output() dataChange = new EventEmitter();
  @Output() additionalSubjectsChange = new EventEmitter();

  resetAdditionalData: any;

  constructor() {
  }

  ngOnInit() {
    this.resetAdditionalData = {
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

  save() {
    const downloadElement = document.createElement('a');
    const result = isUndefined(this.additionalSubjects) ? this.makePersonalFile() : this.makeCurriculumFile();
    const file = new Blob([JSON.stringify(result)], {type: 'application/json'});

    if (window.navigator.msSaveOrOpenBlob) { // IE10+
      window.navigator.msSaveOrOpenBlob(file, `curriculum.json`);
      this.data = result;
      this.dataChange.emit(this.data);
      if (!isUndefined(this.additionalSubjects)) {
        this.additionalSubjectsChange.emit(this.resetAdditionalData)
      };
    } else { // Others
      const url = URL.createObjectURL(file);
      downloadElement.href = url;
      downloadElement.download = isUndefined(this.additionalSubjects) ? `hmrmc_personal.json` : `hmrmc_curriculum.json`;
      document.body.appendChild(downloadElement);
      downloadElement.click();
      setTimeout(function () {
        document.body.removeChild(downloadElement);
        window.URL.revokeObjectURL(url);
      }, 0);
      this.data = result;
      this.dataChange.emit(this.data);
      if (!isUndefined(this.additionalSubjects)) {
        this.additionalSubjectsChange.emit(this.resetAdditionalData)
      };
    }
  }

  makeCurriculumFile() {
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
    return result;
  }

  makePersonalFile() {
    const result = this.data;
    return result
  }

  load(event) {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.data = JSON.parse(event.target.result);
      this.dataChange.emit(this.data);
    };
    reader.readAsText(event.target.files[0]);
    event.target.value = '';
  }
}
