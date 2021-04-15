import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlShapeBlockViewComponent } from './tl-shape-block-view.component';

describe('TlShapeBlockViewComponent', () => {
  let component: TlShapeBlockViewComponent;
  let fixture: ComponentFixture<TlShapeBlockViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlShapeBlockViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlShapeBlockViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
