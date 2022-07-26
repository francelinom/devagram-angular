import { TestBed } from '@angular/core/testing';

import { DevagramApiInterceptorService } from './devagram-api-interceptor.service';

describe('DevagramApiInterceptorService', () => {
  let service: DevagramApiInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevagramApiInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
