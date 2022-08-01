import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlChipViewComponent } from './tl-chip-view.component';

describe('TlChipViewComponent', () => {
  let component: TlChipViewComponent;
  let fixture: ComponentFixture<TlChipViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlChipViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlChipViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
