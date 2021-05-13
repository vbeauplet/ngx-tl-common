import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlActiveMiniatureViewComponent } from './tl-active-miniature-view.component';

describe('TlActiveMiniatureViewComponent', () => {
  let component: TlActiveMiniatureViewComponent;
  let fixture: ComponentFixture<TlActiveMiniatureViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlActiveMiniatureViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlActiveMiniatureViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
