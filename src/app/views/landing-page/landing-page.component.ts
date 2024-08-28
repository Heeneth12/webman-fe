import { Component } from '@angular/core';
import { NavBarComponent } from "../../layouts/nav-bar/nav-bar.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
