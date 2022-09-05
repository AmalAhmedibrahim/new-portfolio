import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';
  activeSection = 'home';

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    const offset = window.scrollY;
    if (offset < 390) {
      this.activeSection = 'home';
    } else if (offset > 390 && offset < 900) {
      this.activeSection = 'about';
    } else if (offset >= 900 && offset < 1600) {
      this.activeSection = 'portfolio';
    } else if (offset >= 1600 && offset < 2200) {
      this.activeSection = 'certificate';
    } else {
      this.activeSection = 'contact';
    }
  }
}
