import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlIconMiniatureSelectViewComponent } from './tl-icon-miniature-select-view.component';

describe('TlIconMiniatureSelectViewComponent', () => {
  let component: TlIconMiniatureSelectViewComponent;
  let fixture: ComponentFixture<TlIconMiniatureSelectViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlIconMiniatureSelectViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlIconMiniatureSelectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
