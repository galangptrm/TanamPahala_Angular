import { TestBed } from '@angular/core/testing';

import { MitraService } from './mitra.service';

describe('MitraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MitraService = TestBed.get(MitraService);
    expect(service).toBeTruthy();
  });
});
