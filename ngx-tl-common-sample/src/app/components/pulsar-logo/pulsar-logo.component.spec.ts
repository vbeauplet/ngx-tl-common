import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulsarLogoComponent } from './pulsar-logo.component';

describe('PulsarLogoComponent', () => {
  let component: PulsarLogoComponent;
  let fixture: ComponentFixture<PulsarLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulsarLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulsarLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
