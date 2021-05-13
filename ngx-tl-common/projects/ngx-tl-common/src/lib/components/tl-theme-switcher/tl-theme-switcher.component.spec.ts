import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlThemeSwitcherComponent } from './tl-theme-switcher.component';

describe('TlThemeSwitcherComponent', () => {
  let component: TlThemeSwitcherComponent;
  let fixture: ComponentFixture<TlThemeSwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlThemeSwitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlThemeSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
