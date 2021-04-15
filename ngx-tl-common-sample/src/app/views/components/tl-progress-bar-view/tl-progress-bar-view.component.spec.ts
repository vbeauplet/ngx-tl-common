import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlProgressBarViewComponent } from './tl-progress-bar-view.component';

describe('TlProgressBarViewComponent', () => {
  let component: TlProgressBarViewComponent;
  let fixture: ComponentFixture<TlProgressBarViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlProgressBarViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlProgressBarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
