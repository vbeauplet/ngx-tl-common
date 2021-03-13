import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlSelectComponent } from './tl-select.component';

describe('TlSelectComponent', () => {
  let component: TlSelectComponent;
  let fixture: ComponentFixture<TlSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
