import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsmComponent } from './bsm.component';

describe('BsmComponent', () => {
  let component: BsmComponent;
  let fixture: ComponentFixture<BsmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
