import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeVariablesViewComponent } from './theme-variables-view.component';

describe('ThemeVariablesViewComponent', () => {
  let component: ThemeVariablesViewComponent;
  let fixture: ComponentFixture<ThemeVariablesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeVariablesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeVariablesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
