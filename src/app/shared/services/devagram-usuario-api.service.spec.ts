import { TestBed } from '@angular/core/testing';

import { DevagramUsuarioApiService } from './devagram-usuario-api.service';

describe('DevagramUsuarioApiService', () => {
  let service: DevagramUsuarioApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevagramUsuarioApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
