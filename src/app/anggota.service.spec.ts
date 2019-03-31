import { TestBed } from '@angular/core/testing';

import { AnggotaService } from './anggota.service';

describe('AnggotaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnggotaService = TestBed.get(AnggotaService);
    expect(service).toBeTruthy();
  });
});
