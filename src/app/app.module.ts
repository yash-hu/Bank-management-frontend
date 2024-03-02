import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { Custom404Component } from './custom-404/custom-404.component';
import { DateTimePipe } from './Pipes/date-time.pipe';
import { HomeComponent } from './home/home.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from './shared/shared.module';
import { addAuthorizationHeaderInterceptor } from './Services/add-authorization-header.interceptor';

@NgModule({
  declarations: [AppComponent, Custom404Component, DateTimePipe, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    SharedModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AuthenticationModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
  ],
  providers: [
    provideAnimations(),
    provideToastr(),
    provideHttpClient(withInterceptors([addAuthorizationHeaderInterceptor])),
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
