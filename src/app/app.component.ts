import { AfterContentInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterContentInit {
  activeSection = 'home';
  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;
  isLoading: boolean;

  constructor() {
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.myStyle = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      'z-index': -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 50,
        },
        color: {
          value: '#ffffff',
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000',
          },
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 4,
          random: true,
          anim: {
            enable: false,
            speed: 80,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 100,
          color: '#ffffff',
          opacity: 0.4,
          width: 0.5,
        },
        move: {
          enable: true,
          speed: 3,
          random: true,
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: false,
            },
            onclick: {
              enable: false,
            },
          },
        },
      },
      retina_detect: true,
    };
  }

  ngAfterContentInit(): void {
    this.isLoading = false;
  }

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
