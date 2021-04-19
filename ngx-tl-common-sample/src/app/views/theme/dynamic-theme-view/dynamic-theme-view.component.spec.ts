import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicThemeViewComponent } from './dynamic-theme-view.component';

describe('DynamicThemeViewComponent', () => {
  let component: DynamicThemeViewComponent;
  let fixture: ComponentFixture<DynamicThemeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicThemeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicThemeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
