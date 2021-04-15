import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlTogglerViewComponent } from './tl-toggler-view.component';

describe('TlTogglerViewComponent', () => {
  let component: TlTogglerViewComponent;
  let fixture: ComponentFixture<TlTogglerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlTogglerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlTogglerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
