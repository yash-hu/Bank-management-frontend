import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { RouteGuardService } from '../Services/route-guard.service';
import { CustomersTableComponent } from './customers-table/customers-table.component';
import { GetByAadharComponent } from './get-by-aadhar/get-by-aadhar.component';
import { AccountsInfoComponent } from './accounts-info/accounts-info.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { EditGuardService } from '../Services/edit-guard.service';

const routes: Routes = [
  {
    path: '',
    component: CustomerHomeComponent,
    canActivate: [RouteGuardService],
    children: [
      { path: '', component: CustomersTableComponent },
      { path: 'getByAadhar', component: GetByAadharComponent },
      { path: 'accounts/:customerId', component: AccountsInfoComponent },
      {
        path: 'edit',
        component: EditCustomerComponent,
        canActivate: [EditGuardService],
        canDeactivate: [RouteGuardService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
