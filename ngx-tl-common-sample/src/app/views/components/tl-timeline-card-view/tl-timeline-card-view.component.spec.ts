import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlTimelineCardViewComponent } from './tl-timeline-card-view.component';

describe('TlTimelineCardViewComponent', () => {
  let component: TlTimelineCardViewComponent;
  let fixture: ComponentFixture<TlTimelineCardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlTimelineCardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlTimelineCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
