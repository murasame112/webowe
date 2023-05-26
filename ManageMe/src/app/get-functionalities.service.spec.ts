import { TestBed } from '@angular/core/testing';

import { GetFunctionalitiesService } from './get-functionalities.service';

describe('GetFunctionalitiesService', () => {
  let service: GetFunctionalitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFunctionalitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
