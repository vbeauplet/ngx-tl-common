import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlImagePickerViewComponent } from './tl-image-picker-view.component';

describe('TlImagePickerViewComponent', () => {
  let component: TlImagePickerViewComponent;
  let fixture: ComponentFixture<TlImagePickerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlImagePickerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlImagePickerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
