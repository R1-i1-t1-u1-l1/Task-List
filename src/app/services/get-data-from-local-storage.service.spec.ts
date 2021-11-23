import { TestBed } from '@angular/core/testing';

import { GetDataFromLocalStorageService } from './get-data-from-local-storage.service';

describe('GetDataFromLocalStorageService', () => {
  let service: GetDataFromLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDataFromLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
