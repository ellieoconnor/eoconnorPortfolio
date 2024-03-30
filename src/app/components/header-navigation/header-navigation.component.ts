import { Component } from '@angular/core';

import {Links} from "./links.model";

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  standalone: true,
  styleUrls: ['./header-navigation.component.css']
})
export class HeaderNavigationComponent {
  // private links: Links;

  //TODO EO: Tooltips

  constructor() { }

}
