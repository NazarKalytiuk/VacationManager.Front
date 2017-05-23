import { LocalStorageService } from './core/services/localstorage.service';
import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { UserService } from './auth/services/user.service';
import { NgSpinningPreloader } from 'ng2-spinning-preloader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private ngSpinningPreloader: NgSpinningPreloader, private auth: AuthService, private userService: UserService, private ls: LocalStorageService) {

  }
  ngOnInit() {
    console.log('init')
    this.auth.getUser().subscribe(c => {
      this.userService.sendUser(c)
    });
    this.ngSpinningPreloader.stop();
  }
  ngOnDestroy() {
    this.ls.clearItem('role');
    this.ls.clearItem('access_token');
  }
}
