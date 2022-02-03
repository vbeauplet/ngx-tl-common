import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlFormComponent } from './tl-form.component';

describe('TlFormComponent', () => {
  let component: TlFormComponent;
  let fixture: ComponentFixture<TlFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
