import { TestBed } from '@angular/core/testing';

import { BerandaService } from './beranda.service';

describe('BerandaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BerandaService = TestBed.get(BerandaService);
    expect(service).toBeTruthy();
  });
});
