import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlLoaderViewComponent } from './tl-loader-view.component';

describe('TlLoaderViewComponent', () => {
  let component: TlLoaderViewComponent;
  let fixture: ComponentFixture<TlLoaderViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlLoaderViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlLoaderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
