import {calcularIVADos, type Producto} from "./05-desestructuracion-funciones";

const carrito:Producto[]=[
    {
        nombre: 'Xbox Series X',
        precio: 10000
    },
    {
        nombre: 'PlayStation 5',
        precio: 12000
    },
    {
        nombre: 'Nintendo Switch 2',
        precio: 11000
    }
];

const [total, iva]=calcularIVADos(carrito);
console.log(`El total es: ${total}`);
console.log(`El IVA es: ${iva}`);