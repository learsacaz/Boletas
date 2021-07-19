export class Boleta{
    valor1:number;
    valor2:number;
    valor3:number;
    valor4:number;

    numeroGanador:string;
    suma:number;
    mensaje:string;

    constructor(){
        this.valor1=-1;
        this.valor2=-1;
        this.valor3=-1;
        this.valor4=-1;
        this.numeroGanador = '';
        this.mensaje='';
        this.suma=0;
    }

    obtenerBalota(){
        let numero:number;
        numero = (Math.trunc(Math.random()*9)-1)+(1);
        if(numero<0){
        numero = 0;
        }
        return numero;
    }

    jugar():void{
        this.valor1 = this.obtenerBalota();
        this.valor2 = this.obtenerBalota();
        this.valor3 = this.obtenerBalota();
        this.valor4 = this.obtenerBalota();
        this.numeroGanador = `El número ganador es: ${this.valor1} -  ${this.valor2} -  ${this.valor3} -  ${this.valor4}`;
        this.suma = this.valor1 + this.valor2 + this.valor3 + this.valor4;
    }

    llamarParImpar(mensaje:string){
        this.mensaje = mensaje;
    }
}