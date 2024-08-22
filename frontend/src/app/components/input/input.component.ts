import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() labelText = '';
  @Input() type = 'text';
  @Input() name = '';
  @Input() id = '';
  @Input() placeholder = '';
  @Input() value = '';
  @Input() disabled = false;
}
