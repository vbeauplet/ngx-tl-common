import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlInlineImagedItemPickerComponent } from './tl-inline-imaged-item-picker.component';

describe('TlInlineImagedItemPickerComponent', () => {
  let component: TlInlineImagedItemPickerComponent;
  let fixture: ComponentFixture<TlInlineImagedItemPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlInlineImagedItemPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlInlineImagedItemPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
