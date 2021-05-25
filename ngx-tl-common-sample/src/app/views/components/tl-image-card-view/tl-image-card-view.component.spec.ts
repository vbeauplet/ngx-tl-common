import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlImageCardViewComponent } from './tl-image-card-view.component';

describe('TlImageCardViewComponent', () => {
  let component: TlImageCardViewComponent;
  let fixture: ComponentFixture<TlImageCardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlImageCardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlImageCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
