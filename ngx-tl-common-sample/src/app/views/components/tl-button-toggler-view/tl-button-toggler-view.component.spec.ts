import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlButtonTogglerViewComponent } from './tl-button-toggler-view.component';

describe('TlButtonTogglerViewComponent', () => {
  let component: TlButtonTogglerViewComponent;
  let fixture: ComponentFixture<TlButtonTogglerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlButtonTogglerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlButtonTogglerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
