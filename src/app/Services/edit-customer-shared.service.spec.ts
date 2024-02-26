import { TestBed } from '@angular/core/testing';

import { EditCustomerSharedService } from './edit-customer-shared.service';

describe('EditCustomerSharedService', () => {
  let service: EditCustomerSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditCustomerSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
