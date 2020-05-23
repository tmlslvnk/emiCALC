import { TestBed } from '@angular/core/testing';

import { Shared } from './shared';

describe('Shared.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Shared = TestBed.get(Shared);
    expect(service).toBeTruthy();
  });
});
