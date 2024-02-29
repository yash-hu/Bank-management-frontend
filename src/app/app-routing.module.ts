import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Custom404Component } from './custom-404/custom-404.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { RouteGuardService } from './Services/route-guard.service';
import { LoginGuardService } from './Services/login-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuardService],
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
  },
  {
    path: 'accounts',
    loadChildren: () =>
      import('./accounts/accounts.module').then((m) => m.AccountsModule),
  },
  {
    path: 'transactions',
    loadChildren: () =>
      import('./transactions/transactions.module').then(
        (m) => m.TransactionsModule
      ),
  },
  {
    path: '**',
    component: Custom404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
