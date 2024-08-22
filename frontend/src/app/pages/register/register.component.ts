import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { SliderComponent } from '../../components/slider/slider.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    HeaderComponent,
    RegisterFormComponent,
    FooterComponent,
    RouterLink,
    SliderComponent,
  ],
  templateUrl: './register.component.html',
})
export class RegisterComponent {}
