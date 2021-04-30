import { TestBed } from '@angular/core/testing';

import { ComponentPreferencesService } from './component-preferences.service';

describe('ComponentPreferencesService', () => {
  let service: ComponentPreferencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentPreferencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
