import { TestBed } from '@angular/core/testing';

import { viasService } from './vias.service';

describe('viasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: viasService = TestBed.get(viasService);
    expect(service).toBeTruthy();
  });
});
