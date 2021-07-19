import { Component } from '@angular/core';
import { Boleta } from './boleta.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'boletas';

  boleta = new Boleta();

  
  constructor(){
  }

}
