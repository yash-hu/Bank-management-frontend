import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomerTableComponent } from './get-customer-table.component';

describe('GetCustomerTableComponent', () => {
  let component: GetCustomerTableComponent;
  let fixture: ComponentFixture<GetCustomerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetCustomerTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetCustomerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
