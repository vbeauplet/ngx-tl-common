import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlActionCenterViewComponent } from './tl-action-center-view.component';

describe('TlActionCenterViewComponent', () => {
  let component: TlActionCenterViewComponent;
  let fixture: ComponentFixture<TlActionCenterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlActionCenterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlActionCenterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
