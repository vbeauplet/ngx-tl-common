import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlCardViewComponent } from './tl-card-view.component';

describe('TlCardViewComponent', () => {
  let component: TlCardViewComponent;
  let fixture: ComponentFixture<TlCardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlCardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
