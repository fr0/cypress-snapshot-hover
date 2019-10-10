import {Component} from '@angular/core';

@Component({
  selector: 'app-error-popup',
  template: `
    <div>An error occurred!</div>
  `,
  styles: [`
    :host {
      background: red;
      padding: 8px;
      position: absolute;
      top: 0;
      left: 20vw;
      right: 20vw;
      border: 1px solid gray;
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 14pt;
      z-index: 50000;
      color: white;
    }
  `]
})
export class ErrorPopupComponent {

}
