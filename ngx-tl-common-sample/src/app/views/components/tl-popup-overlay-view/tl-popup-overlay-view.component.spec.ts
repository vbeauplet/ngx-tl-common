import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlPopupOverlayViewComponent } from './tl-popup-overlay-view.component';

describe('TlPopupOverlayViewComponent', () => {
  let component: TlPopupOverlayViewComponent;
  let fixture: ComponentFixture<TlPopupOverlayViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlPopupOverlayViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlPopupOverlayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
