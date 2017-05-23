import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { MdSidenav } from "@angular/material";

import { NavbarService } from '../services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public title: string = "DEVChallenge";
  public showButton: boolean = true;
  isAuth: boolean = false;

  constructor(private _navbarSerivce: NavbarService, private router: Router) {
  }

  ngOnInit(): void {
    this._navbarSerivce.getMessage().subscribe(message => {
      this.title = message.text;
    });
  }

  @Input() leftsidenav: MdSidenav;
}
