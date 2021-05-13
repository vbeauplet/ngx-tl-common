import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlStatefulButtonViewComponent } from './tl-stateful-button-view.component';

describe('TlStatefulButtonViewComponent', () => {
  let component: TlStatefulButtonViewComponent;
  let fixture: ComponentFixture<TlStatefulButtonViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlStatefulButtonViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlStatefulButtonViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
