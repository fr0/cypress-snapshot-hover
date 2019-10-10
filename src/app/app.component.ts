import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-error-popup *ngIf="showingErrorPopup" id="error-panel"></app-error-popup>

    <button (click)="showErrorPopup()" >Click here to show the error popup</button>

    <div>Here are some fields you can edit for fun:</div>
    <label>
      input1
      <input type="text" [(ngModel)]="props.input1" id="input1"/>
    </label>

    <label>
      input2
      <input type="text" [(ngModel)]="props.input2" id="input2"/>
    </label>

    <pre>{{props | json}}</pre>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  `]
})
export class AppComponent {
  props = {
    input1: '',
    input2: ''
  };
  showingErrorPopup = false;

  showErrorPopup() {
    this.showingErrorPopup = true;
  }
}
