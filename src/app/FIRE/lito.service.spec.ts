import { TestBed } from '@angular/core/testing';

import { LitoService } from './lito.service';

describe('LitoService', () => {
  let service: LitoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LitoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
