import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'login-register';
  log_email: string;
  log_password: string;
  reg_email: string;
  reg_password: string;
  reg_confirm_password: string;

  register() {}
  login() {}
}
