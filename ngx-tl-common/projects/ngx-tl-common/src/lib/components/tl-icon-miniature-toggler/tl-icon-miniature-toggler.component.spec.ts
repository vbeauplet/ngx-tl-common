import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlIconMiniatureTogglerComponent } from './tl-icon-miniature-toggler.component';

describe('TlIconMiniatureTogglerComponent', () => {
  let component: TlIconMiniatureTogglerComponent;
  let fixture: ComponentFixture<TlIconMiniatureTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlIconMiniatureTogglerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlIconMiniatureTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
