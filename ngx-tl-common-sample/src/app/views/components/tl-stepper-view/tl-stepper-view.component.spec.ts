import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlStepperViewComponent } from './tl-stepper-view.component';

describe('TlStepperViewComponent', () => {
  let component: TlStepperViewComponent;
  let fixture: ComponentFixture<TlStepperViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlStepperViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlStepperViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
