import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlIconMiniatureTogglerViewComponent } from './tl-icon-miniature-toggler-view.component';

describe('TlIconMiniatureTogglerViewComponent', () => {
  let component: TlIconMiniatureTogglerViewComponent;
  let fixture: ComponentFixture<TlIconMiniatureTogglerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlIconMiniatureTogglerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlIconMiniatureTogglerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
