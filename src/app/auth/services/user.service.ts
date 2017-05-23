import { Observable, Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { User } from 'app/core/models';


@Injectable()
export class UserService {

  private user = new Subject<any>();

  sendUser(user : User) {
    this.user.next(user);
  }

  clearUser() {
    this.user.next();
  }

  getUser(): Observable<any> {
    return this.user.asObservable();
  }
  constructor() { }

}
