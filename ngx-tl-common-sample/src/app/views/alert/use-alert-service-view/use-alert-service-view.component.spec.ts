import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseAlertServiceViewComponent } from './use-alert-service-view.component';

describe('UseAlertServiceViewComponent', () => {
  let component: UseAlertServiceViewComponent;
  let fixture: ComponentFixture<UseAlertServiceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseAlertServiceViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseAlertServiceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
