import { Component } from '@angular/core';
import { AuthService } from '@redbits/users';
import { Router } from '@angular/router';

@Component({
  selector: 'eshop-nav',
  templateUrl: './nav.component.html',
  styles: [
  ]
})
export class NavComponent   {

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  isLogging = false;



  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  logoutUser() {
    this.isLogging = true;
    this.authService.logout();
    this.router.navigate(['/'])
  }

}
