// Definiendo las clases

class Propietario {
    constructor(nombreP, direccion, fono){
        this.nombreP = nombreP;
        this.direccion = direccion;
        this.fono = fono;
    }
    datosPropietario(){
        return 'La persona propietaria es: ' + this.nombreP + ', su dirección es: ' + this.direccion + ' y su teléfono de contacto: ' + this.fono;
    }
}

class Animal extends Propietario {
    constructor(nombreP, direccion, fono, tipo){
        super (nombreP, direccion, fono);
        this._tipo = tipo;

    }

    get tipo() {
        return `El tipo de animal es un: ${this._tipo}`
    }
}


class Mascota extends Animal {
    constructor(nombreP, direccion, fono, tipo, nombreA, enfermedad){
        super(nombreP, direccion, fono, tipo);
        this._nombreA = nombreA; // 'this' hace referencia al atributo original de la clase
        this._enfermedad = enfermedad;
    }

    get nombreA() {
        return this._nombreA;
        }

    set nombreA(nombreA) {
        this._nombreA = nombreA; // puede ser también newNombreA, sería solo para diferenciar, pero es lo mismo 
    }

    get enfermedad() {
        return this._enfermedad;
        }

    set enfermedad(enfermedad) {
        this._enfermedad = enfermedad;
    }

}

let formulairo = document.querySelector('form');

let agregando = (event) => {
    event.preventDefault();
    let propietario = document.getElementById('propietario').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let direccion = document.getElementById('direccion').value;
    let enfermedad = document.getElementById('enfermedad').value;
    let fono = document.getElementById('fono').value;
    let tipo = document.getElementById('tipo').value;

    switch (tipo) {
        case 'perro':
            let perro = new Mascota(propietario, direccion, fono, tipo, nombreMascota, enfermedad); //creando el objeto 'Mascota'
            mostarResultado(perro);
            break;

        case 'gato':
            let gato = new Mascota(propietario, direccion, fono, tipo, nombreMascota, enfermedad);
            mostarResultado(gato);
            break;

        case 'conejo':
            let conejo = new Mascota(propietario, direccion, fono, tipo, nombreMascota, enfermedad);
            mostarResultado(conejo);
            break;
    }
}

let mostarResultado = (valor) => {
    let resultado = document.querySelector('#resultado ul');
    resultado.innerHTML = ""; // Dato vacío para que se rellene con las funciones luego
}