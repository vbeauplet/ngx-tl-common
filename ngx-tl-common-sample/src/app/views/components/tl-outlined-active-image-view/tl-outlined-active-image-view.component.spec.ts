import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlOutlinedActiveImageViewComponent } from './tl-outlined-active-image-view.component';

describe('TlOutlinedActiveImageViewComponent', () => {
  let component: TlOutlinedActiveImageViewComponent;
  let fixture: ComponentFixture<TlOutlinedActiveImageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlOutlinedActiveImageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlOutlinedActiveImageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
