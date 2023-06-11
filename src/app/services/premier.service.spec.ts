import { TestBed } from '@angular/core/testing';

import { PremierService } from './premier.service';

describe('PremierService', () => {
  let service: PremierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PremierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
