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
        title: 'Ecommerce App',
        imageScr: './assets/images/store.gif',
        headTitle: 'Ecommerce App',
        description:
          'An angular application that allows users to view a list of available products to purchase, add them to a shopping cart, and complete the checkout process.',

        languages: ['Angular', 'CSS', 'TypeScript'],
        websiteURL: 'https://flymoneystore.herokuapp.com/',
        codeURL: 'https://github.com/AmalAhmedibrahim/MyStore',
        animation: false,
      },
      {
        title: 'Restaurant Website',
        imageScr: './assets/images/BitMe.png',
        headTitle: 'Bit Me',
        description:
          'a beautifully designed one-page restaurant website with everything a customer needs (menu, events calendar, contact info, reservation options, address, etc.)',

        languages: ['HTML, SASS'],
        websiteURL: 'https://github.com/AmalAhmedibrahim/BitMe',
        codeURL: 'https://github.com/AmalAhmedibrahim/BitMe',
        animation: true,
      },
      {
        title: 'MyReads App',
        imageScr: './assets/images/myReads.gif',
        headTitle: 'React , HTML ',
        description: `A bookcase to store your books and track what you're reading. user can add Books to a bookshelf and move them from one shelf to another.`,

        languages: ['React, HTML', 'CSS'],
        websiteURL: 'https://myreadsshelf.herokuapp.com/',
        codeURL: 'https://github.com/AmalAhmedibrahim/MyReads',
        animation: false,
      },
      {
        title: 'Time To Travel',
        imageScr: './assets/images/travel.png',
        headTitle: 'Pure HTML , SASS , Js',
        description: `An app obtains information on the user's upcoming destination. With the help of external APIs then displays the weather and an image of the location on that given date.`,
        languages: ['HTML, SASS', 'JS'],
        websiteURL: 'https://traveltimeapp.netlify.app/',
        codeURL: 'https://github.com/AmalAhmedibrahim/TravelApp',
        animation: true,
      },
    ];
  }

  ngOnInit(): void {
    AOS.init();
  }
}
