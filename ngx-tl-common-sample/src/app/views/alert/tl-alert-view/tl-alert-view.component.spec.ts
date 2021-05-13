import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlAlertViewComponent } from './tl-alert-view.component';

describe('TlAlertViewComponent', () => {
  let component: TlAlertViewComponent;
  let fixture: ComponentFixture<TlAlertViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlAlertViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlAlertViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
