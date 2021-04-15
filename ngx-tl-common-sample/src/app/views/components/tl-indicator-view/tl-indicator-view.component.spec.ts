import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlIndicatorViewComponent } from './tl-indicator-view.component';

describe('TlIndicatorViewComponent', () => {
  let component: TlIndicatorViewComponent;
  let fixture: ComponentFixture<TlIndicatorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlIndicatorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlIndicatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
