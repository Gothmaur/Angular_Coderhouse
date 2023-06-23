/*console.log('Hola Mundo');

function saludar(nombre:string):string{
    console.log('hola ${nombre}');
    return nombre;    
}

function saludar(fn:() =>String){
    return [5];
}*/
/** Parte 1*/
let cantidadAlumnos:number=0
let frutas:(string | number)[] = ['Manzana', 'Naranja',2]
let productos : Array<string> = ['zapato','otro']


let humano = {
    nombre: 'Josue',
    apellido: 'Baez',
    edad:28,
}


interface Humano{
    nombre:string;
    apellido:string;
    edad:number;

}

interface Superheroe extends Humano{
    poderes: string[];
}

function saludarHumano (humano:Humano):void{
    console.log('hola $[usuario.nombre]');
}

/**Parte 2 */

interface producto{
    nombre:string;
    precio:number;
}
//Generico : Argumento T
interface RespuestaListado <T>{
    page: number;
    per_page: number;
    total: number;
    total_page:number;
    data: T[];
}

const respuestaProductos: RespuestaListado<string> ={
    page: 0,
    per_page: 0,
    total: 0,
    total_page:0,
    data: ['Hola','mundo'],
}

//////////////////7Clases
//Complicación usando Interface.
interface Vehiculo{
    marca:string;
    cantidadRuedas:number;
    color:string;
    esMotorizado:boolean;
}

let motocicleta:Vehiculo={
    cantidadRuedas:2,
    color,
    esMotorizado:true,
    marca: 'Yamaha'
}


///Definir clase:
class Vehiculos {
    marca:string;
    cantidadRuedas:number;
    color:string;
    esMotorizado:boolean;

    constructor(
        marca:string,
        cantidadRuedas: number,
        color:string,
        esMotorizado:boolean,
    ){
        this.marca=marca;
        this.cantidadRuedas=cantidadAlumnos;
        this.color=color;
        this.esMotorizado=esMotorizado;
    }
}
//Short Version
class VehiculosSV{
    constructor(
        public marca:string,
        public cantidadRuedas: number,
        public color:string,
        public esMotorizado:boolean,
    ){

    }
}

const limusina = new Vehiculos('Mercedes Benz',6,'Negro',true);
const Tractor = new Vehiculos('Mercedes Benz',4,'Amarillo',true);