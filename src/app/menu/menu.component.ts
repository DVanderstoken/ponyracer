import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  navbarCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

  public toggleNavbar() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

}
