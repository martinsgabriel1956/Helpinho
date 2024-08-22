import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './auth-header.component.html',
})
export class AuthHeaderComponent {}
