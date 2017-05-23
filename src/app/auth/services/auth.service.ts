import { RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { UserService } from './';
import { LocalStorageService, BaseService } from 'app/core/services';
import { User } from 'app/core/models'


@Injectable()
export class AuthService {

  constructor(private http: Http, private route: Router, private base: BaseService,
    private localStorage: LocalStorageService, private userService: UserService) { }

  authenticate(): void {
    window.location.href = `${this.base.HOST}account`;
  }
  getToken(): void {
    this.http.get(`${this.base.HOST}getToken`, this.base.options).subscribe(c => {
      this.localStorage.setItem('access_token', c.json());
    });
  }
  getUser(): Observable<User> {
    return this.http.get(`${this.base.HOST}account/user`, this.base.options).map(c => c.json());
  }
}
