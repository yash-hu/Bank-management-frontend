import { Component } from '@angular/core';
import { ILoginData } from '../../../Interfaces/ILoginData';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginData: ILoginData = {
    username: '',
    password: '',
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: ToastrService
  ) {}

  handleSubmit(): void {
    this.authService.login(this.loginData).subscribe(
      (token) => {
        localStorage.setItem('token', token);
        this.toast.success('Login Successful...', 'Success', {
          positionClass: 'toast-bottom-right',
        });
        this.router.navigateByUrl('/');
      },
      (error) => {
        this.toast.error(error.error, error.statusText, {
          positionClass: 'toast-bottom-right',
        });
      }
    );
  }
}
