import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlChipComponent } from './tl-chip.component';

describe('TlChipComponent', () => {
  let component: TlChipComponent;
  let fixture: ComponentFixture<TlChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
