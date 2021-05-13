import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlStringPickerViewComponent } from './tl-string-picker-view.component';

describe('TlStringPickerViewComponent', () => {
  let component: TlStringPickerViewComponent;
  let fixture: ComponentFixture<TlStringPickerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlStringPickerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlStringPickerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
