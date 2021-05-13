import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlSquareIconViewComponent } from './tl-square-icon-view.component';

describe('TlSquareIconViewComponent', () => {
  let component: TlSquareIconViewComponent;
  let fixture: ComponentFixture<TlSquareIconViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlSquareIconViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlSquareIconViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
