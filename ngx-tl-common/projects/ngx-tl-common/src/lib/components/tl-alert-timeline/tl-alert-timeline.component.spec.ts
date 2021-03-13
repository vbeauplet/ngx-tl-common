import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlAlertTimelineComponent } from './tl-alert-timeline.component';

describe('TlAlertTimelineComponent', () => {
  let component: TlAlertTimelineComponent;
  let fixture: ComponentFixture<TlAlertTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlAlertTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlAlertTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
