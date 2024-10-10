"use strict";
class Action {
    constructor(id, descripcion, fecha) {
        this.id = id;
        this.descripcion = descripcion;
        this.fecha = fecha;
    }
    mostrarDetalle() {
        console.log(`Este es el ID ${this.id}, esta es la descripcion: ${this.descripcion} y esta es la fecha: ${this.fecha}`);
    }
}
class InicioDeSesion extends Action {
    constructor(id, dispositivo_origen, fecha) {
        super(id, "Inicio De Sesion", fecha);
        this.dispositivo_origen = dispositivo_origen;
    }
    mostrarDetalle() {
        console.log(`Este es el ID ${this.id}, Esta es la descripcion: ${this.descripcion}, Esta es la fecha: ${this.fecha}, El dispositivo con el que se ingreso es: ${this.dispositivo_origen}`);
    }
}
class CierreDeSesion extends Action {
    constructor(id, dispositivo_origen, tiempo_de_sesion, fecha) {
        super(id, "Cierre De Sesion", fecha);
        this.dispositivo_origen = dispositivo_origen;
        this.tiempo_de_sesion = tiempo_de_sesion;
    }
    mostrarDetalle() {
        console.log(`Este es el ID ${this.id}, Esta es la descripcion: ${this.descripcion}, Esta es la fecha: ${this.fecha}, El dispositivo con el que se cerro es: ${this.dispositivo_origen} con una duracion de ${this.tiempo_de_sesion}`);
    }
}
class ActualizarPerfil extends Action {
    constructor(id, descripcion, fecha, Cambios) {
        super(id, "ActualizarPerfil", fecha);
        this.Cambios = Cambios;
    }
    mostrarDetalle() {
        console.log(`Este es el ID ${this.id}, Esta es la descripcion: ${this.descripcion}, Esta es la fecha: ${this.fecha}`);
    }
}
class Cambio {
    constructor(id_cambio, valor_a_cambiar, valor_modificado, campo) {
        this.id_cambio = id_cambio;
        this.valor_a_cambiar = valor_a_cambiar;
        this.valor_modificado = valor_modificado;
        this.campo = campo;
    }
    mostrarDetalle() {
        console.log(`Se ha realizado con cambio con el numero de id ${this.id_cambio} en el campo ${this.campo}, el valor a cambio fue: ${this.valor_a_cambiar} y su nuevo valor es: ${this.valor_modificado}`);
    }
}
class AccionCompra extends Action {
    constructor(id, descripcion, fecha, productos, total) {
        super(id, "Compras", fecha);
        this.productos = productos;
        this.total = total;
    }
    mostrarDetalle() {
        console.log(`Se han comprados estos productos: ${this.productos} sumando un total a pagar de ${this.total}`);
    }
}
class AccionEnvioMensaje extends Action {
    constructor(id, descripcion, fecha, mensaje, destinatario) {
        super(id, "Envio de mensaje", fecha);
        this.destinatario = destinatario;
        this.mensaje = mensaje;
    }
    mostrarDetalle() {
        console.log(`El envio del mensaje por ${this.destinatario} que dice ${this.mensaje} con ID: ${this.id}, en la fecha: ${this.fecha} `);
    }
}
