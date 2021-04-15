import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlMiniatureViewComponent } from './tl-miniature-view.component';

describe('TlMiniatureViewComponent', () => {
  let component: TlMiniatureViewComponent;
  let fixture: ComponentFixture<TlMiniatureViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlMiniatureViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlMiniatureViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
