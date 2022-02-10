import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlChipsInputComponent } from './tl-chips-input.component';

describe('TlChipsInputComponent', () => {
  let component: TlChipsInputComponent;
  let fixture: ComponentFixture<TlChipsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlChipsInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlChipsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
