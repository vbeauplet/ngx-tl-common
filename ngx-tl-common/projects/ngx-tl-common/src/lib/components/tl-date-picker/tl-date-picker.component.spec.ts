import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlDatePickerComponent } from './tl-date-picker.component';

describe('TlDatePickerComponent', () => {
  let component: TlDatePickerComponent;
  let fixture: ComponentFixture<TlDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlDatePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
