import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlImageCardComponent } from './tl-image-card.component';

describe('TlImageCardComponent', () => {
  let component: TlImageCardComponent;
  let fixture: ComponentFixture<TlImageCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlImageCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlImageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
