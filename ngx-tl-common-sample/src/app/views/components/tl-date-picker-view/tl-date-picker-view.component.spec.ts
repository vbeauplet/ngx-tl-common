import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlDatePickerViewComponent } from './tl-date-picker-view.component';

describe('TlDatePickerViewComponent', () => {
  let component: TlDatePickerViewComponent;
  let fixture: ComponentFixture<TlDatePickerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlDatePickerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlDatePickerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
