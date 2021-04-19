import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnStaticThemeComponent } from './own-static-theme.component';

describe('OwnStaticThemeComponent', () => {
  let component: OwnStaticThemeComponent;
  let fixture: ComponentFixture<OwnStaticThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnStaticThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnStaticThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
