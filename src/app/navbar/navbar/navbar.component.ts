import { AuthService } from './../../Services/auth.service';
import { Component, OnInit, inject } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  authService: AuthService = inject(AuthService);
  constructor(private toast: ToastrService, private router: Router) {}

  handleLogout(): void {
    this.authService.logOut().subscribe((Response) => {
      this.toast.info('Successfully logged out...', 'Success', {
        positionClass: 'toast-bottom-right',
      });
      this.router.navigateByUrl('/login');
    });
  }
}
