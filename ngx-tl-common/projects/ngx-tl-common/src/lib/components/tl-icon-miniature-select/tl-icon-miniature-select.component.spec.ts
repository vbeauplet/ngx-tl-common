import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlIconMiniatureSelectComponent } from './tl-icon-miniature-select.component';

describe('TlIconMiniatureSelectComponent', () => {
  let component: TlIconMiniatureSelectComponent;
  let fixture: ComponentFixture<TlIconMiniatureSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlIconMiniatureSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlIconMiniatureSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
