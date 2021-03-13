import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlProgressBarComponent } from './tl-progress-bar.component';

describe('TlProgressBarComponent', () => {
  let component: TlProgressBarComponent;
  let fixture: ComponentFixture<TlProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
