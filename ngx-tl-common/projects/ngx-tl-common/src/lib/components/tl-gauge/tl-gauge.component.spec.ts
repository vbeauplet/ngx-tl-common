import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlGaugeComponent } from './tl-gauge.component';

describe('TlGaugeComponent', () => {
  let component: TlGaugeComponent;
  let fixture: ComponentFixture<TlGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlGaugeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
