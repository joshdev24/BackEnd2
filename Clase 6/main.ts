
class Action{
    id: number;
    descripcion: string;
    fecha: Date;
    constructor(id:number, descripcion: string, fecha: Date){
        this.id = id;
        this.descripcion = descripcion;
        this.fecha = fecha;

    }

mostrarDetalle() : void{
    console.log(`Este es el ID ${this.id}, esta es la descripcion: ${this.descripcion} y esta es la fecha: ${this.fecha}`)
}

}


class InicioDeSesion extends Action{
    dispositivo_origen: string



    constructor(id:number, dispositivo_origen: string, fecha: Date){
    super(id, "Inicio De Sesion", fecha);
    this.dispositivo_origen = dispositivo_origen
    }


    mostrarDetalle() : void {
        console.log(`Este es el ID ${this.id}, Esta es la descripcion: ${this.descripcion}, Esta es la fecha: ${this.fecha}, El dispositivo con el que se ingreso es: ${this.dispositivo_origen}`)
        
    }

}

class CierreDeSesion extends Action{
    dispositivo_origen: string
    tiempo_de_sesion:number



    constructor(id:number, dispositivo_origen: string, tiempo_de_sesion : number, fecha: Date){
    super(id, "Cierre De Sesion", fecha);
    this.dispositivo_origen = dispositivo_origen
    this.tiempo_de_sesion = tiempo_de_sesion
    }


    mostrarDetalle() : void {
        console.log(`Este es el ID ${this.id}, Esta es la descripcion: ${this.descripcion}, Esta es la fecha: ${this.fecha}, El dispositivo con el que se cerro es: ${this.dispositivo_origen} con una duracion de ${this.tiempo_de_sesion}`)
        
    }

}

class ActualizarPerfil extends Action{
    Cambios : Cambio[]

    constructor(id:number, descripcion: string, fecha: Date, Cambios : Cambio[]){
    super(id, "ActualizarPerfil", fecha);
    this.Cambios = Cambios
    }


    mostrarDetalle() : void {
        console.log(`Este es el ID ${this.id}, Esta es la descripcion: ${this.descripcion}, Esta es la fecha: ${this.fecha}`)
        
    }

}

class Cambio {
    id_cambio : number
    valor_a_cambiar: string
    valor_modificado:string
    campo:string


    constructor(id_cambio:number, valor_a_cambiar: string, valor_modificado: string, campo:string){
        this.id_cambio = id_cambio
        this.valor_a_cambiar =valor_a_cambiar
        this.valor_modificado =  valor_modificado
        this.campo = campo
    }



    mostrarDetalle() : void {
        console.log(`Se ha realizado con cambio con el numero de id ${this.id_cambio} en el campo ${this.campo}, el valor a cambio fue: ${this.valor_a_cambiar} y su nuevo valor es: ${this.valor_modificado}`)
        
    }
}

class AccionCompra extends Action{
    productos : string
    total: number

    constructor(id:number, descripcion: string, fecha: Date, productos:string, total:number){
    super(id, "Compras", fecha);
    this.productos = productos
    this.total = total
    }


    mostrarDetalle() : void {
        console.log(`Se han comprados estos productos: ${this.productos} sumando un total a pagar de ${this.total}`)
    }

}


class AccionEnvioMensaje extends Action{
    destinatario : string
    mensaje : string

    constructor(id:number, descripcion: string, fecha: Date, mensaje: string, destinatario: string){
    super(id, "Envio de mensaje", fecha);
    this.destinatario = destinatario
    this.mensaje = mensaje
    }


    mostrarDetalle() : void {
        console.log(`El envio del mensaje por ${this.destinatario} que dice ${this.mensaje} con ID: ${this.id}, en la fecha: ${this.fecha} `)
    }

}