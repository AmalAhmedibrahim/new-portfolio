import { Certificate } from './../models/certificate.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
})
export class CertificateComponent {
  @Input() certificate: Certificate;
  constructor() {}
}
