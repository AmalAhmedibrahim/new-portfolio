import { slideUp } from 'src/app/animations/animations';
import { fadeIn } from './../../../animations/animations';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [fadeIn, slideUp],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
