import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-round-button',
  templateUrl: './round-button.component.html',
  styleUrls: ['./round-button.component.scss'],
})
export class RoundButtonComponent implements OnInit {
  @Input() title: string;
  constructor() {}

  ngOnInit(): void {}
}
