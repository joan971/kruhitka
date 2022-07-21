import { Component, OnInit } from '@angular/core';
import { UsersService } from '@redbits/users';

@Component({
  selector: 'eshop-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'ngshop';

  constructor(
    private usersService: UsersService
  ){

  }
ngOnInit() {
  this.usersService.initAppSession();
}


}
