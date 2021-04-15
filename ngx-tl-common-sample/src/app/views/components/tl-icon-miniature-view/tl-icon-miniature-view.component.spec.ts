import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlIconMiniatureViewComponent } from './tl-icon-miniature-view.component';

describe('TlIconMiniatureViewComponent', () => {
  let component: TlIconMiniatureViewComponent;
  let fixture: ComponentFixture<TlIconMiniatureViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlIconMiniatureViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlIconMiniatureViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
