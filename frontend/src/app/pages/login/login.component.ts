import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'login-page',
  standalone: true,
  imports: [
    InputComponent,
    LoginFormComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {}
