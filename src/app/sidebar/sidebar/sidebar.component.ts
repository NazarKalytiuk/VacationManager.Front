import { Component, OnInit } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { MenuItem } from '../models/menu';
import { MenuService } from '../services/menu.service';
import { UserService } from '../../auth/services/user.service';
import { LocalStorageService } from 'app/core/services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public user;
  public element: HTMLElement;
  public menu: Array<MenuItem> = new Array<MenuItem>();
  arrowIcon: string = "keyboard_arrow_down";
  constructor(private _menuservice: MenuService, private _l: MdSidenav, private userService: UserService, private ls: LocalStorageService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(c => {
      this.user = c;
    });
    if (this.ls.getItem('role') && this.ls.getItem('role').toString() == '1') {
      this._menuservice.getManagerMenu().subscribe(message => this.menu = message);
      this._menuservice.getManagerMenu().subscribe(message => this.menu = message);
    } else {
      this._menuservice.getMenu().subscribe(message => this.menu = message);
      this._menuservice.getMenu().subscribe(message => this.menu = message);
    }

    window.addEventListener("resize", this.resize.bind(this))
  }
  resize() {
    if (window.innerWidth < 800) {
      this._l.opened = false;
      this._l.mode = "over";
    } else {
      this._l.opened = true;
      this._l.mode = "side";
    }
  }
}
