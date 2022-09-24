import { Project } from './models/project.interface';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  projects: Project[];
  constructor() {
    this.projects = [
      {
        title: 'Resturant Website',
        imageScr: './assets/images/BitMe.png',
        headTitle: 'Pure HTML , SASS ',
        description:
          'Actress WebSite that contains latest songs , albums and time of concerts',

        languages: ['HTML', 'SASS', 'JavaScript'],
        websiteURL: '',
        codeURL: '',
      },

      {
        title: 'Actress Website',
        imageScr: './assets/images/Faia.png',
        headTitle: 'Pure HTML , SASS ',
        description:
          'Actress WebSite that contains latest songs , albums and time of concerts',

        languages: ['HTML, SASS'],
        websiteURL: '',
        codeURL: '',
      },

      {
        title: 'Actress Website',
        imageScr: './assets/images/Faia.png',
        headTitle: 'Pure HTML , SASS ',
        description:
          'Actress WebSite that contains latest songs , albums and time of concerts',

        languages: ['HTML, SASS'],
        websiteURL: '',
        codeURL: '',
      },

      {
        title: 'Actress Website',
        imageScr: './assets/images/Faia.png',
        headTitle: 'Pure HTML , SASS ',
        description:
          'Actress WebSite that contains latest songs , albums and time of concerts',

        languages: ['HTML, SASS'],
        websiteURL: '',
        codeURL: '',
      },
    ];
  }

  ngOnInit(): void {
    AOS.init();
  }
}
