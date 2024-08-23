import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { HomeHeaderComponent } from '../../components/home-header/home-header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHeaderComponent, RouterLink],
  templateUrl: './home.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  screenWidth: number = 0;

  ngOnInit(): void {
    this.updateScreenWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateScreenWidth();
  }

  private updateScreenWidth() {
    this.screenWidth = window.innerWidth;
    console.log('Screen width:', this.screenWidth);
  }
}
