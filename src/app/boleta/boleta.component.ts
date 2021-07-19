import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boleta',
  templateUrl: './boleta.component.html',
  styleUrls: ['./boleta.component.css']
})
export class BoletaComponent implements OnInit {

  @Input()valor:number;

  constructor() { 
    this.valor = -1;
  }

  ngOnInit(): void {
  }

}
