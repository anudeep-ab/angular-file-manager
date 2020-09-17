import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent implements OnInit {
  display: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  showDialog() {
    this.display = true;
  }
}
