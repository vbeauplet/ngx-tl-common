import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlNukiCardViewComponent } from './tl-nuki-card-view.component';

describe('TlNukiCardViewComponent', () => {
  let component: TlNukiCardViewComponent;
  let fixture: ComponentFixture<TlNukiCardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlNukiCardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlNukiCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
