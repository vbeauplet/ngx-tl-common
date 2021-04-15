import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlActiveImageViewComponent } from './tl-active-image-view.component';

describe('TlActiveImageViewComponent', () => {
  let component: TlActiveImageViewComponent;
  let fixture: ComponentFixture<TlActiveImageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlActiveImageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlActiveImageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
