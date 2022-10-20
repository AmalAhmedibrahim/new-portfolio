import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundButtonComponent } from './buttons/round-button/round-button.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [RoundButtonComponent, LoaderComponent],
  imports: [CommonModule],
  exports: [RoundButtonComponent, LoaderComponent],
})
export class SharedModule {}
