import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingStartedViewComponent } from './getting-started-view.component';

describe('GettingStartedViewComponent', () => {
  let component: GettingStartedViewComponent;
  let fixture: ComponentFixture<GettingStartedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettingStartedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingStartedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
