import { Component } from '@angular/core';
import {NavBarTitles} from "../../constants-strings";
import {NgIf, NgOptimizedImage} from "@angular/common";


@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  styleUrls: ['./header-navigation.component.css']
})
export class HeaderNavigationComponent {
  // private links: Links;

  //TODO EO: Tooltips

  isDarkMode: boolean = true; //Assume false is light mode, true for dark mode.
toggleDarkMode() {
  this.isDarkMode =!this.isDarkMode; //toggle mode
}

  constructor() { }

  protected readonly NavBarTitles = NavBarTitles;
}
