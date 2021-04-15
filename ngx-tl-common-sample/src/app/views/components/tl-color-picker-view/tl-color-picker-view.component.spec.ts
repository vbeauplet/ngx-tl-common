import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlColorPickerViewComponent } from './tl-color-picker-view.component';

describe('TlColorPickerViewComponent', () => {
  let component: TlColorPickerViewComponent;
  let fixture: ComponentFixture<TlColorPickerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlColorPickerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlColorPickerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
