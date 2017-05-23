import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { AuthService, UserService } from '../services';
import { LocalStorageService } from 'app/core';
import { MenuService } from '../../sidebar/services/menu.service';



@Component({
  selector: 'app-login-callback',
  templateUrl: './login-callback.component.html',
  styleUrls: ['./login-callback.component.scss']
})
export class LoginCallbackComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private userService: UserService,
    private localStorage: LocalStorageService, private _menuservice: MenuService) { }

  private timer;
  ngOnInit() {
    this.timer = setInterval(() => {
      this.auth.getToken();
      console.log('timer working');
      this.auth.getUser().subscribe(user => {
        this.userService.sendUser(user);
        this.localStorage.setItem('role', user.role.toString());
        if (user) {
          if (user.role.toString() == '1') {
            this._menuservice.getManagerMenu().subscribe();
            this._menuservice.getManagerMenu().subscribe();
          }
          else {
            this._menuservice.getMenu().subscribe();
            this._menuservice.getMenu().subscribe();
          }
          this.router.navigate(['/login']);
        }
      });
    }, 200);
  }
  ngOnDestroy() {
    clearInterval(this.timer);

  }

}
