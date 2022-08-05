import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlIconDropdownComponent } from './tl-icon-dropdown.component';

describe('TlIconDropdownComponent', () => {
  let component: TlIconDropdownComponent;
  let fixture: ComponentFixture<TlIconDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlIconDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlIconDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
