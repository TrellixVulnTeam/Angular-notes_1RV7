import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
  <p>This is a warning, you are in danger!</p>
  `,
  styles: [
    `
    p{
      padding: 30px;
      background-color: rgb(220, 76,76);
      border: 1px solid black;
    }
    `
  ]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
