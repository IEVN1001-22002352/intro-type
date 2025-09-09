interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor:Reproductor={
    volumen: 90,
    segundo: 36,
    cancion: 'Where Is The Love',
    detalles:{
        autor: 'The Black Eyed Peas',
        anio: 2010,
    }
};

console.log('El volumen actual es: ', reproductor.volumen);
console.log('El segundo actual es: ', reproductor.segundo);
console.log('La canción actual es: ', reproductor.cancion);
console.log('El autor es: ', reproductor.detalles.autor);
//Desestructuración
const {volumen, segundo, cancion, detalles}=reproductor;
const {autor:nuevoAutor, anio}=detalles;
console.log('El volumen actual es: ', volumen);
console.log('El segundo actual es: ', segundo);
console.log('La canción actual es: ', cancion);
console.log('El autor es: ', nuevoAutor);
console.log('El año es: ', anio);

//Desestructuracion de arreglos
const onePiece:string[]=['Luffy', 'Zoro', 'Sanji'];
const [p1, p2, p3]=onePiece;
console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);

const[,,p4]=onePiece;
console.log('Personaje 4: ', p4);