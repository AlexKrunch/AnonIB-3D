import { TestBed } from '@angular/core/testing';

import { ChanWebService } from './chan-web.service';

describe('ChanWebService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChanWebService = TestBed.get(ChanWebService);
    expect(service).toBeTruthy();
  });
});
