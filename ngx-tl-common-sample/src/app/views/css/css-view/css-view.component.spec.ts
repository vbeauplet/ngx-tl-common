import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssViewComponent } from './css-view.component';

describe('CssViewComponent', () => {
  let component: CssViewComponent;
  let fixture: ComponentFixture<CssViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
