import { TestBed } from '@angular/core/testing';

import { RouteAuthService } from './route-auth.service';

describe('RouteAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteAuthService = TestBed.get(RouteAuthService);
    expect(service).toBeTruthy();
  });
});
