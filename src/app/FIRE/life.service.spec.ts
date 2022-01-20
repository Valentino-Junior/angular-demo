import { TestBed } from '@angular/core/testing';

import { LifeService } from './life.service';

describe('LifeService', () => {
  let service: LifeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LifeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
