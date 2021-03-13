import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlOverlayComponent } from './tl-overlay.component';

describe('TlOverlayComponent', () => {
  let component: TlOverlayComponent;
  let fixture: ComponentFixture<TlOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
