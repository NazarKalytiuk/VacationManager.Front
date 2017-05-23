import { Observable, Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { MenuItem } from '../models';

@Injectable()
export class MenuService {

  private show = new Subject<any>();
  public menu = new Subject<any>();
  private primaryMenu = new Array<MenuItem>(
    { url: "employee", icon: "person", text: "Мої відпустки" },
    { url: "employee/claims", icon: "person", text: "Мої заявки" },
  );
  private primaryManagerMenu = new Array<MenuItem>(
    { url: "employee", icon: "person", text: "Мої відпустки" },
    { url: "employee/claims", icon: "person", text: "Мої заявки" },
    { url: "manager/claims", icon: "person", text: "Заявки співробітників" },
  );
  private secondaryMenu = new Array<MenuItem>(
    { url: "publisher", icon: "settings", text: "Налаштування" },
  );
  constructor() { }

  getMenu(): Observable<any> {
    this.menu.next(this.primaryMenu);
    return this.menu.asObservable();
  }
  getManagerMenu(): Observable<any> {
    this.menu.next(this.primaryManagerMenu);
    return this.menu.asObservable();
  }
  getSecondaryMenu(): Observable<any> {
    this.menu.next(this.secondaryMenu);
    return this.menu.asObservable();
  }
  getShow(): Observable<any> {
    this.show.next(true);
    return this.show.asObservable();
  }

}
