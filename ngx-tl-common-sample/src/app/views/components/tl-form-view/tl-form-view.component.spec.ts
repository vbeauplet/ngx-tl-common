import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlFormViewComponent } from './tl-form-view.component';

describe('TlFormViewComponent', () => {
  let component: TlFormViewComponent;
  let fixture: ComponentFixture<TlFormViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlFormViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
