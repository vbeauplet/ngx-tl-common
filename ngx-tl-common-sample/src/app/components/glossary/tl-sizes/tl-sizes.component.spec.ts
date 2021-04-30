import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlSizesComponent } from './tl-sizes.component';

describe('TlSizesComponent', () => {
  let component: TlSizesComponent;
  let fixture: ComponentFixture<TlSizesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlSizesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlSizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
