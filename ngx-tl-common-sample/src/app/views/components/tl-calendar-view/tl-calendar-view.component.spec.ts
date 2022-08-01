import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlCalendarViewComponent } from './tl-calendar-view.component';

describe('TlCalendarViewComponent', () => {
  let component: TlCalendarViewComponent;
  let fixture: ComponentFixture<TlCalendarViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlCalendarViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlCalendarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
