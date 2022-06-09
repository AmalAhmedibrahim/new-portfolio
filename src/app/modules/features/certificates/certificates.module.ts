import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificatesComponent } from './certificates.component';
import { CertificateComponent } from './certificate/certificate.component';

@NgModule({
  declarations: [CertificatesComponent, CertificateComponent],
  imports: [CommonModule],
  exports: [CertificatesComponent],
})
export class CertificatesModule {}
