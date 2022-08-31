import { Component, OnInit } from '@angular/core';
import { fadeIn, slideLeft, slideUp } from 'src/app/animations/animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [slideLeft, fadeIn],
})
export class FooterComponent {
  constructor() {}
}
