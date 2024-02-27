import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FormsModule, AppRoutingModule],
  exports: [LoginComponent],
})
export class AuthenticationModule {}
