import { TestBed } from '@angular/core/testing';

import { OfflineService } from './offline.service';

describe('OfflineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfflineService = TestBed.get(OfflineService);
    expect(service).toBeTruthy();
  });
});
