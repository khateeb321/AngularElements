import {
  Input,
  Component,
  ViewEncapsulation,
  EventEmitter,
  Output
} from '@angular/core';
import { HttpClient } from '@angular/common/http';


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
  
  constructor(private http: HttpClient){
  }

  handleClick() {
    this.apiCall().subscribe((data: any) => {
      this.result = data;
      this.action.emit(this.result);
    });
  }

  apiCall(){
    // Dummy API call returns JSON
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
