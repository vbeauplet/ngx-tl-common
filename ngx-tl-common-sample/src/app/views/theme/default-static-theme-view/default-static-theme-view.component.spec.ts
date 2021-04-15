import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultStaticThemeViewComponent } from './default-static-theme-view.component';

describe('DefaultStaticThemeViewComponent', () => {
  let component: DefaultStaticThemeViewComponent;
  let fixture: ComponentFixture<DefaultStaticThemeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultStaticThemeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultStaticThemeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
