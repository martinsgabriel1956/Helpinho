import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';

@Component({
  selector: 'app-slider-item',
  standalone: true,
  imports: [],
  templateUrl: './slider-item.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SliderItemComponent {
  @Input() text: string = '';
}
