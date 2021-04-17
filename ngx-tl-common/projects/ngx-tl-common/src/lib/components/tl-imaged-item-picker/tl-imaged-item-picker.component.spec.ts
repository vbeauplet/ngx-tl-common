import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlImagedItemPickerComponent } from './tl-imaged-item-picker.component';

describe('TlImagedItemSelectorComponent', () => {
  let component: TlImagedItemPickerComponent;
  let fixture: ComponentFixture<TlImagedItemPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlImagedItemPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlImagedItemPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
