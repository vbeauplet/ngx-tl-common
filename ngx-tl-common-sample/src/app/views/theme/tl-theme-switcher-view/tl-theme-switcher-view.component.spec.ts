import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlThemeSwitcherViewComponent } from './tl-theme-switcher-view.component';

describe('TlThemeSwitcherViewComponent', () => {
  let component: TlThemeSwitcherViewComponent;
  let fixture: ComponentFixture<TlThemeSwitcherViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlThemeSwitcherViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlThemeSwitcherViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
