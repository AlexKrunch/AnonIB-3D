import { TestBed } from '@angular/core/testing';

import { GameUIServiceService } from './game-uiservice.service';

describe('GameUIServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameUIServiceService = TestBed.get(GameUIServiceService);
    expect(service).toBeTruthy();
  });
});
