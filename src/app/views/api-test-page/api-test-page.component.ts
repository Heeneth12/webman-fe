import { Component } from '@angular/core';
import { NavBarComponent } from '../../layouts/nav-bar/nav-bar.component';
import { ApiTesterComponent } from '../../layouts/api-tester/api-tester.component';

@Component({
  selector: 'app-api-test-page',
  standalone: true,
  imports: [ NavBarComponent , ApiTesterComponent],
  templateUrl: './api-test-page.component.html',
  styleUrl: './api-test-page.component.css'
})
export class ApiTestPageComponent {

}
