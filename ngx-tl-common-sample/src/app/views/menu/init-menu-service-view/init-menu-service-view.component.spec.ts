import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitMenuServiceViewComponent } from './init-menu-service-view.component';

describe('InitMenuServiceViewComponent', () => {
  let component: InitMenuServiceViewComponent;
  let fixture: ComponentFixture<InitMenuServiceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitMenuServiceViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitMenuServiceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
