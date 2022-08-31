import { CertificatesModule } from './modules/features/certificates/certificates.module';
import { PortfolioModule } from './modules/features/portfolio/portfolio.module';
import { AboutModule } from './modules/features/about/about.module';
import { HomeModule } from './modules/features/home/home.module';
import { LayoutModule } from './modules/layout/layout.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HomeModule,
    AboutModule,
    PortfolioModule,
    CertificatesModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
