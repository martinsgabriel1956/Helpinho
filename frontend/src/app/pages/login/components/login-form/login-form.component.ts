import { Component } from '@angular/core';
import { InputComponent } from '../../../../components/input/input.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {}
