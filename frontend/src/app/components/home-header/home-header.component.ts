import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './home-header.component.html',
})
export class HomeHeaderComponent implements OnInit {
  screenWidth: number = 0;
  isAuthenticated: boolean = false;

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
