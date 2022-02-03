import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlRaterViewComponent } from './tl-rater-view.component';

describe('TlRaterViewComponent', () => {
  let component: TlRaterViewComponent;
  let fixture: ComponentFixture<TlRaterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlRaterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlRaterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
