class Instrumento {
    constructor(marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
}

const arrayInstrumentos = [];

arrayInstrumentos.push(new Instrumento("schecter", "Hellraiser C7", 150000));
arrayInstrumentos.push(new Instrumento("ibanez", "rgx2000", 90000));
arrayInstrumentos.push(new Instrumento("chapman", "Ml1 Baritona", 80000));
arrayInstrumentos.push(new Instrumento("fender", "Stratocaster", 100000));
arrayInstrumentos.push(new Instrumento("mayones", "Duvell 7", 2000000));
arrayInstrumentos.push(new Instrumento("gibson", "Les Paul custom", 200000));
arrayInstrumentos.push(new Instrumento("epiphone", "Les Paul 100", 45000));


function menuOpciones() {
    alert("Bienvenido a MusicHouse, tu pagina de compra venta de instrumentos de confianza!");
    let opcion = parseInt (prompt ("¿Que accion le gustaria realizar? \n 1) Consultar catalogo \n 2) Poner a la venta un instrumento \n 3) Buscar guitarra \n 4) Eliminar producto \n 5) Salir"));
    return opcion;
}

function consultarCatalogo() {
    const contenedorProductos=document.getElementById('contenedorProductos');
    
    arrayInstrumentos.forEach(element => {
        let card = document.createElement("div")
        card.innerHTML=` 
        <h2>${element.marca}</h2>
        <p>${element.modelo}</p>
        <p>${element.precio}</p>
        `
        contenedorProductos.appendChild(card)
    });
    
    
    
}



function venderTuGuitarra() {
    let marca = prompt("Ingrese la marca de la guitarra: ");
    let modelo = prompt("Ingrese el modelo");
    let precio = parseInt(prompt("¿A que valor desea ofertarla?"));
    let guitarra = new Instrumento(marca, modelo, precio);
    arrayInstrumentos.push(guitarra);
    alert("Se ha agregado exitosamente el instrumento al catalogo!");
    
    const contenedorProductos=document.getElementById('contenedorProductos');
    
    arrayInstrumentos.forEach(element => {
        let card = document.createElement("div")
        card.innerHTML=` 
        <h2>${element.marca}</h2>
        <p>${element.modelo}</p>
        <p>${element.precio}</p>
        `
        contenedorProductos.appendChild(card)
    });
}

function buscarGuitarra() {
    let marca = prompt("Ingrese la marca: ");

    let guitarra = arrayInstrumentos.filter(guitarra => guitarra.marca == marca);

    const contenedorProductos=document.getElementById('contenedorProductos');
    
    guitarra.forEach(element => {
        let card = document.createElement("div")
        card.innerHTML=` 
        <h2>${element.marca}</h2>
        <h2>${element.modelo}</h2>
        <h2>${element.precio}</h2>
        `
        contenedorProductos.appendChild(card)
    });

    
    
    
}

function eliminarProducto() {
    let marca = prompt("Ingrese la marca a remover: ");
    let guitarra = arrayInstrumentos.find(guitarra => guitarra.marca == marca);
    let indice = arrayInstrumentos.indexOf(guitarra);
    arrayInstrumentos.splice(indice, 1);

    const contenedorProductos=document.getElementById('contenedorProductos');
    
    arrayInstrumentos.forEach(element => {
        let card = document.createElement("div")
        card.innerHTML=` 
        <h2>${element.marca}</h2>
        <p>${element.modelo}</p>
        <p>${element.precio}</p>
        `
        contenedorProductos.appendChild(card)
    });

    let mensaje = document.createElement("div");
    mensaje.innerHTML=(`Se ha borrado ${guitarra.marca} ${guitarra.modelo} exitosamente `)
    document.body.append(mensaje)
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