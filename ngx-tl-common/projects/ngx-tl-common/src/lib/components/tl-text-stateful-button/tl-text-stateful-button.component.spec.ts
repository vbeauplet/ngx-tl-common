import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlTextStatefulButtonComponent } from './tl-text-stateful-button.component';

describe('TlTextStatefulButtonComponent', () => {
  let component: TlTextStatefulButtonComponent;
  let fixture: ComponentFixture<TlTextStatefulButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlTextStatefulButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlTextStatefulButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
