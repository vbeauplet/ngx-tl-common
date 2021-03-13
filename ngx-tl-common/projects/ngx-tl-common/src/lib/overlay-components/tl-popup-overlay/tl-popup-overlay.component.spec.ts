import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlPopupOverlayComponent } from './tl-popup-overlay.component';

describe('TlPopupOverlayComponent', () => {
  let component: TlPopupOverlayComponent;
  let fixture: ComponentFixture<TlPopupOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlPopupOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlPopupOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
