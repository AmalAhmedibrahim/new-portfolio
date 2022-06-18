import { Certificate } from './models/certificate.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
})
export class CertificatesComponent implements OnInit {
  certificates: Certificate[];
  constructor() {}

  ngOnInit(): void {
    this.certificates = [
      {
        name: 'Web development scholarship',
        organization: 'Information Technology Institute',
        logoScr: '../assets/images/iti.png',
        FinalProjectURL: '',
        certificateURL: '',
      },
      {
        name: 'UX Developer',
        organization: 'Udacity Nanodegree Program',
        logoScr: './assets/icons/udacity.svg',
        FinalProjectURL: '',
        certificateURL: '',
      },
      {
        name: 'React Developer',
        organization: 'Udacity Nanodegree Program',
        logoScr: './assets/icons/udacity.svg',
        FinalProjectURL: '',
        certificateURL: '',
      },

      {
        name: 'Frontend Developer',
        organization: 'Udacity Nanodegree Program',
        logoScr: './assets/icons/udacity.svg',
        FinalProjectURL: '',
        certificateURL: '',
      },
    ];
  }
}
