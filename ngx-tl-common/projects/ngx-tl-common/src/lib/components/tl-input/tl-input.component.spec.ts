import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlInputComponent } from './tl-input.component';

describe('TlInputComponent', () => {
  let component: TlInputComponent;
  let fixture: ComponentFixture<TlInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
