import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlRaterComponent } from './tl-rater.component';

describe('TlRaterComponent', () => {
  let component: TlRaterComponent;
  let fixture: ComponentFixture<TlRaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlRaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlRaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
