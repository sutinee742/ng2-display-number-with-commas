import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Display number with commas';
  numForDisplay: string = '';
  numForInput: number ;

  genNumWithComma() {
    console.log('User input number: '+this.numForInput);
    var numStr = this.numForInput+'';
    var num = numStr.replace(/\d(?=(?:\d{3})+$)/g, '$&,');
    console.log('Display number: '+num);
    this.numForDisplay = num;
  }


}
