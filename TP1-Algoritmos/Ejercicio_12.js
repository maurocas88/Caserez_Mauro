
class vehiculo{
    marca;
    modelo; 
    año;
    constructor(marcas,modelos,años){
        this.marca=marcas;
        this.modelo=modelos;
        this.año=años;
    }
    obtenerInformacion () {
        return(`Vehiculo: ${this.marca}, ${this.modelo}, año ${this.año}`);
    }
}


class automovil extends vehiculo{
    color;
    precio;
    constructor(marcas,modelos,años,colores,precios){
        super(marcas,modelos,años);
        this.color=colores;
        this.precio=precios;

    }
    obtenerInformacion () {
        return(super.obtenerInformacion() +`, color: ${this.color}, precio: U$D ${this.precio}`);

    }
}

const moto1=new vehiculo("Honda","wave",2014);
console.log(moto1.obtenerInformacion());

const auto1=new automovil("Fiat","Palio",2011,"bermellon","3000");
console.log(auto1.obtenerInformacion());

