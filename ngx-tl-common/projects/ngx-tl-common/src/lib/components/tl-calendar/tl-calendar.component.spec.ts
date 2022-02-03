import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlCalendarComponent } from './tl-calendar.component';

describe('TlCalendarComponent', () => {
  let component: TlCalendarComponent;
  let fixture: ComponentFixture<TlCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
