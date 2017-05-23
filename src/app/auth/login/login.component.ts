import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services';
import { LocalStorageService } from 'app/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private ls: LocalStorageService) { }

  ngOnInit() {
    this.auth.authenticate();
    // this.auth.callback();
  }
}
