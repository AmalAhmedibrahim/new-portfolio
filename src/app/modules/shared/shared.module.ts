import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundButtonComponent } from './buttons/round-button/round-button.component';

@NgModule({
  declarations: [RoundButtonComponent],
  imports: [CommonModule],
  exports: [RoundButtonComponent],
})
export class SharedModule {}
