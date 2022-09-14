class instrumento {
    constructor(marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
}

const ArrayInstrumentos = [];

ArrayInstrumentos.push(new instrumento("schecter", "Hellraiser C7", 150000));
ArrayInstrumentos.push(new instrumento("ibanez", "Banshee", 90000));
ArrayInstrumentos.push(new instrumento("chapman", "Ml1 Baritona", 80000));
ArrayInstrumentos.push(new instrumento("fender", "Stratocaster", 100000));
ArrayInstrumentos.push(new instrumento("gibson", "Les Paul custom", 200000));
ArrayInstrumentos.push(new instrumento("epiphone", "Les Paul 100", 45000));

function menuOpciones() {
    alert("Bienvenido a MusicHouse, tu pagina de compra venta de instrumentos de confianza!");
    let opcion = parseInt (prompt ("¿Que accion le gustaria realizar? \n 1) Consultar catalogo \n 2) Poner a la venta un instrumento \n 3) Buscar guitarra \n 4) Eliminar producto \n 5) Salir"));
    return opcion;
}

function consultarCatalogo() {
    console.log("Catalogo: ");
    console.log(ArrayInstrumentos);
}

function venderTuGuitarra() {
    let marca = prompt("Ingrese la marca de la guitarra: ");
    let modelo = prompt("Ingrese el modelo");
    let precio = parseInt(prompt("¿A que valor desea ofertarla?"));
    let guitarra = new instrumento(marca, modelo, precio);
    ArrayInstrumentos.push(guitarra);
    alert("Se ha agregado exitosamente el instrumento al catalogo!");
    console.log("Catalogo: ");
    console.log(ArrayInstrumentos);
}

function buscarGuitarra() {
    let marca = prompt("Ingrese la marca: ");
    let guitarra = ArrayInstrumentos.find(guitarra => guitarra.marca == marca);
    console.log("Resultados de busqueda: ")
    console.log(guitarra);
}

function eliminarProducto() {
    let marca = prompt("Ingrese la marca a remover: ");
    let guitarra = ArrayInstrumentos.find(guitarra => guitarra.marca == marca);
    let indice = ArrayInstrumentos.indexOf(guitarra);
    ArrayInstrumentos.splice(indice, 1);
    console.log(ArrayInstrumentos);
}

let opcion = menuOpciones();

while (opcion != "1" && opcion !="2" && opcion != "3" && opcion != "4" && opcion != "5") {
    opcion = parseInt(prompt("Ingrese un valor valido \n 1) Consultar catalogo \n 2) Poner a la venta un instrumento \n 3) Buscar guitarra \n 4) Eliminar producto  \n 5) Salir"))
}

switch (opcion) {
    case 1:
        consultarCatalogo();
        break;

    case 2:
        venderTuGuitarra();
        break;

    case 3:
        buscarGuitarra();
        break;

    case 4:
        eliminarProducto()
        break;

    case 5:
        alert("Vuelva prontos!")
        break;

    default:
        alert("opcion no valida")
        break
}