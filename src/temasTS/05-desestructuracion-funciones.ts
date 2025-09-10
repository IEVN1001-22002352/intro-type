export interface Producto{
    nombre: string;
    precio: number;

}

const telefono:Producto={
    nombre:'Cubot Note 40',
    precio: 1800
};

const tablet:Producto={
    nombre:'Samsung 80',
    precio: 3000
};

function calcularIVA(productos:Producto[]):number{
    let total=0;
    for(let producto of productos){
        total+=producto.precio;
    }
    return total*0.21;
}

const articulos=[telefono, tablet];
const iva=calcularIVA(articulos);
console.log(`El IVA es: ${iva}`);

//Desestructuracion de una funcion
export function calcularIVADos(productos:Producto[]):[number, number]{
    let total=0;
    for(let producto of productos){
        total+=producto.precio;
    }
    return [total, total*0.21];
}
const [total, ivaDos]=calcularIVADos(articulos);
console.log(`El total es: ${total}`);
console.log(`El IVA es: ${ivaDos}`);