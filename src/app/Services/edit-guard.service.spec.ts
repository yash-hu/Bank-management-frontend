import { TestBed } from '@angular/core/testing';

import { EditGuardService } from './edit-guard.service';

describe('EditGuardService', () => {
  let service: EditGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
