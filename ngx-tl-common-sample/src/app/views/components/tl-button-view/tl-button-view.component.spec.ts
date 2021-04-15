import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlButtonViewComponent } from './tl-button-view.component';

describe('TlButtonViewComponent', () => {
  let component: TlButtonViewComponent;
  let fixture: ComponentFixture<TlButtonViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlButtonViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlButtonViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
