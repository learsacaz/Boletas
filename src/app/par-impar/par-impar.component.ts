import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-par-impar',
  templateUrl: './par-impar.component.html',
  styleUrls: ['./par-impar.component.css']
})
export class ParImparComponent implements OnInit {

  mensaje: string;

  //recibe el valor
  @Input() valor:number;
  //mandar un mensaje al componente padre

  @Output() parImpar = new EventEmitter<string>();

  constructor() { 
    this.mensaje = '';
    this.valor = -1;
  }

  calcularParImpar(){
    if(this.valor % 2 == 0){
      this.mensaje = `La suma de las balotas es: ${this.valor} y es Par`;
    }else{
      this.mensaje = `La suma de las balotas es: ${this.valor} y es Impar`;
    }
    this.parImpar.emit(this.mensaje);
  }

  ngOnInit(): void {
  }

}
