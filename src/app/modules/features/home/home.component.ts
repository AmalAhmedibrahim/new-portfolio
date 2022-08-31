import { Component, OnInit } from '@angular/core';
import { slideRight, slideUp } from 'src/app/animations/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [slideUp, slideRight],
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
