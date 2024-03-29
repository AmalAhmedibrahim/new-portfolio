import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [PortfolioComponent, CardComponent],
  imports: [CommonModule],
  exports: [PortfolioComponent],
})
export class PortfolioModule {}
