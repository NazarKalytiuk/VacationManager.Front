import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';

import { LocalStorageService } from './localstorage.service';

@Injectable()
export class BaseService {

  public readonly HOST = 'http://localhost:3000/';
  constructor(private localStorage: LocalStorageService) {
  }
  get options() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.localStorage.getItem('access_token'));
    let options = new RequestOptions({ headers: headers });
    return options;
  }

}
