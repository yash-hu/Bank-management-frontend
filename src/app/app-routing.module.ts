import { GetAccountComponent } from './accounts/get-account/get-account.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerHomeComponent } from './customers/customer-home/customer-home.component';
import { AccountsHomeComponent } from './accounts/accounts-home/accounts-home.component';
import { TransactionsHomeComponent } from './transactions/transactions-home/transactions-home.component';
import { CustomersTableComponent } from './customers/customers-table/customers-table.component';
import { GetByAadharComponent } from './customers/get-by-aadhar/get-by-aadhar.component';
import { AccountsInfoComponent } from './customers/accounts-info/accounts-info.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { FindAccountComponent } from './accounts/find-account/find-account.component';
import { AddTransactionComponent } from './transactions/add-transaction/add-transaction.component';
import { ViewTransactionsComponent } from './transactions/view-transactions/view-transactions.component';
import { TransactionInfoComponent } from './transactions/transaction-info/transaction-info.component';
import { Custom404Component } from './custom-404/custom-404.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path: 'customers',
    component: CustomerHomeComponent,
    children: [
      { path: '', component: CustomersTableComponent },
      { path: 'getByAadhar', component: GetByAadharComponent },
      { path: 'accounts/:customerId', component: AccountsInfoComponent },
      { path: 'edit', component: EditCustomerComponent },
    ],
  },
  {
    path: 'accounts',
    component: AccountsHomeComponent,
    children: [
      { path: '', component: AddAccountComponent },
      { path: 'get/All', component: GetAccountComponent },
      { path: 'get', component: FindAccountComponent },
    ],
  },
  {
    path: 'transactions',
    component: TransactionsHomeComponent,
    children: [
      { path: '', component: AddTransactionComponent },
      { path: 'get', component: ViewTransactionsComponent },
      { path: 'Transactions/Accounts/:accountNo',component:TransactionInfoComponent}
    ],
  },
  {
    path:'**',
    component:Custom404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
