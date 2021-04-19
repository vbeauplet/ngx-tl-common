import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlInlineImagePickerViewComponent } from './tl-inline-image-picker-view.component';

describe('TlInlineImagePickerViewComponent', () => {
  let component: TlInlineImagePickerViewComponent;
  let fixture: ComponentFixture<TlInlineImagePickerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlInlineImagePickerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlInlineImagePickerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
