// Object entries: devuelve los valores de una matriz.

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const entries = Object.entries(data); // Transforma este objeto en una matriz
console.log(entries);
console.log(entries.length); // Si queremos saber cuantos elementos posee nuestro arreglo ahora es posible con length.

// Object Values: Me devuelve los valores de un objeto a un arreglo.

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana' 
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

// Padding: Nos permite añadir cadenas vacías a string. Pudiendo modificar la cadena string como tal.
// Podría servir del lado del front, para mostrar una estructura de elementos

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '-----'));
console.log('food'.padEnd(12, '-----'));

// Trailing comas: Nos permite asignar elementos al objeto mediante comas. podemos tener una coma al final del último elemento

const obj = {
    name: 'Oscar',
}