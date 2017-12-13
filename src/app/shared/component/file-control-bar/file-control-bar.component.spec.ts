import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileControlBarComponent } from './file-control-bar.component';

describe('FileControlBarComponent', () => {
  let component: FileControlBarComponent;
  let fixture: ComponentFixture<FileControlBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileControlBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileControlBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
