import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsHomeComponent } from './accounts-home/accounts-home.component';
import { RouteGuardService } from '../Services/route-guard.service';
import { AddAccountComponent } from './add-account/add-account.component';
import { GetAccountComponent } from './get-account/get-account.component';
import { FindAccountComponent } from './find-account/find-account.component';

const routes: Routes = [
  {
    path: '',
    component: AccountsHomeComponent,
    canActivate: [RouteGuardService],
    children: [
      { path: '', component: AddAccountComponent },
      { path: 'get/All', component: GetAccountComponent },
      { path: 'get', component: FindAccountComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule {}
