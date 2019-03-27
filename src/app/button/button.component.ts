import {
  Input,
  Component,
  ViewEncapsulation,
  EventEmitter,
  Output
} from '@angular/core';

import { TestService } from '../services/testService';


@Component({
  selector: 'custom-button',
  template: `<button (click)="handleClick()">{{label}}</button>
  <p>From Angular Element</p>`,
  styles: [
    `
    button {
      border: solid 3px;
      padding: 8px 10px;
      background: #bada55;
      font-size: 20px;
    }
  `
  ],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent {
  @Input() label = 'default label';
  @Output() action = new EventEmitter<any>();
  result: any;
  
  constructor(private testService: TestService){

  }

  handleClick() {
    this.testService.getData().subscribe((data: any) => {
      this.result = data;
      this.action.emit(this.result);
    });
  }
}
