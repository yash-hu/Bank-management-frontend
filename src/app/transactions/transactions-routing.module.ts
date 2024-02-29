import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsHomeComponent } from './transactions-home/transactions-home.component';
import { RouteGuardService } from '../Services/route-guard.service';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { ViewTransactionsComponent } from './view-transactions/view-transactions.component';
import { TransactionInfoComponent } from './transaction-info/transaction-info.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionsHomeComponent,
    canActivate: [RouteGuardService],
    children: [
      { path: '', component: AddTransactionComponent },
      { path: 'get', component: ViewTransactionsComponent },
      {
        path: 'Transactions/Accounts/:accountNo',
        component: TransactionInfoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionsRoutingModule {}
