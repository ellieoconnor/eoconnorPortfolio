import { Component } from '@angular/core';
import {NavBarTitles} from "../constants-strings";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  protected readonly NavBarTitles = NavBarTitles;
}
