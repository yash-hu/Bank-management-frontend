import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomersTableComponent } from './customers-table/customers-table.component';
import { GetByAadharComponent } from './get-by-aadhar/get-by-aadhar.component';
import { AccountsInfoComponent } from './accounts-info/accounts-info.component';
import { AccountTypePipe } from '../Pipes/account-type.pipe';
import { GetCustomerTableComponent } from './get-customer-table/get-customer-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { SharedModule } from '../shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  declarations: [
    CustomerHomeComponent,
    CustomersTableComponent,
    GetByAadharComponent,
    AccountsInfoComponent,
    GetCustomerTableComponent,
    EditCustomerComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
  exports: [CustomerHomeComponent, AccountTypePipe],
  providers: [DatePipe],
})
export class CustomersModule {}
