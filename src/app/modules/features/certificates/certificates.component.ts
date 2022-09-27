import { Certificate } from './models/certificate.interface';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
})
export class CertificatesComponent implements OnInit {
  certificates: Certificate[];
  constructor() {}

  ngOnInit(): void {
    AOS.init();

    this.certificates = [
      {
        name: `Bachelor of computer science`,
        organization: 'Ain-Shams University',
        logoScr: './assets/images/ainshams.png',
        FinalProjectURL: '',
        certificateURL: '',
      },
      {
        name: 'Web development scholarship',
        organization: 'Information Technology Institute',
        logoScr: '../assets/images/iti.png',
        FinalProjectURL: 'https://github.com/AmalAhmedibrahim/Linkedin-',
        certificateURL: '',
      },

      {
        name: 'React Developer',
        organization: 'Udacity Nanodegree Program',
        logoScr: './assets/icons/udacity.svg',
        FinalProjectURL: 'https://github.com/AmalAhmedibrahim/WouldRather',
        certificateURL: 'https://graduation.udacity.com/confirm/RLDLFA3J',
      },

      {
        name: 'Frontend Developer',
        organization: 'Udacity Nanodegree Program',
        logoScr: './assets/icons/udacity.svg',
        FinalProjectURL:
          'https://github.com/AmalAhmedibrahim/EvaluateNewsArticleWithNLP',
        certificateURL: 'https://graduation.udacity.com/confirm/HJT7U3V5',
      },
    ];
  }
}
