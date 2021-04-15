import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlSpinnerViewComponent } from './tl-spinner-view.component';

describe('TlSpinnerViewComponent', () => {
  let component: TlSpinnerViewComponent;
  let fixture: ComponentFixture<TlSpinnerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlSpinnerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlSpinnerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
