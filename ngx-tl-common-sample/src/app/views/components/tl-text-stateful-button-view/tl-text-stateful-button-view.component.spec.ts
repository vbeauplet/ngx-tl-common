import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlTextStatefulButtonViewComponent } from './tl-text-stateful-button-view.component';

describe('TlTextStatefulButtonViewComponent', () => {
  let component: TlTextStatefulButtonViewComponent;
  let fixture: ComponentFixture<TlTextStatefulButtonViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlTextStatefulButtonViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlTextStatefulButtonViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
