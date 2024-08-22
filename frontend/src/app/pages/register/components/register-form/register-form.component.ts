import { Component } from '@angular/core';
import { InputComponent } from '../../../../components/input/input.component';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {}
