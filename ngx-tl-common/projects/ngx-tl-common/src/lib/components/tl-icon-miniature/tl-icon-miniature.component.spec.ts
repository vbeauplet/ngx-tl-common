import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlIconMiniatureComponent } from './tl-icon-miniature.component';

describe('TlIconMiniatureComponent', () => {
  let component: TlIconMiniatureComponent;
  let fixture: ComponentFixture<TlIconMiniatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlIconMiniatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlIconMiniatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
