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
        FinalProjectURL:
          'https://drive.google.com/file/d/1UNTqTPyeFZHVh_o3WjVGu3IWdFS12nHK/view?usp=sharing',
        certificateURL:
          'https://drive.google.com/file/d/1zM2CodB8KXBmmjTbUT0WDuO9aL5TEhmU/view?usp=sharing',
      },
      {
        name: 'Web development scholarship',
        organization: 'Information Technology Institute',
        logoScr: '../assets/images/iti.png',
        FinalProjectURL: 'https://github.com/AmalAhmedibrahim/Linkedin-',
        certificateURL:
          'https://drive.google.com/file/d/11Cma-zZ2EBT-VId9HW18kBG6NuZZSFxf/view?usp=sharing',
      },

      {
        name: 'React developer',
        organization: 'Udacity Nanodegree Program',
        logoScr: './assets/icons/udacity.svg',
        FinalProjectURL: 'https://github.com/AmalAhmedibrahim/WouldRather',
        certificateURL: 'https://graduation.udacity.com/confirm/RLDLFA3J',
      },

      {
        name: 'Frontend developer',
        organization: 'Udacity Nanodegree Program',
        logoScr: './assets/icons/udacity.svg',
        FinalProjectURL:
          'https://github.com/AmalAhmedibrahim/EvaluateNewsArticleWithNLP',
        certificateURL: 'https://graduation.udacity.com/confirm/HJT7U3V5',
      },
    ];
  }
}
