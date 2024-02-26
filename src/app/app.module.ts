import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { CustomersModule } from './customers/customers.module';
import { AccountsModule } from './accounts/accounts.module';
import { TransactionsModule } from './transactions/transactions.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { AccountTypePipe } from './Pipes/account-type.pipe';
import { DatePipe } from '@angular/common';
import { Custom404Component } from './custom-404/custom-404.component';
import { DateTimePipe } from './Pipes/date-time.pipe';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    Custom404Component,
    DateTimePipe,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    CustomersModule,
    AccountsModule,
    TransactionsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [provideAnimations(),provideToastr()],
  bootstrap: [AppComponent]
})
export class AppModule { }