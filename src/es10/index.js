// Flat: Permite aplanar arreglos

let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat())
console.log(array.flat(2))

// FlatMap: Lo mismo que flat con el beneficio de que primero manipula la data para luego poder aplanar

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));
 
// trimStart: Permite eliminar los espacios de un string

let hello = '         hello world';
console.log(hello);
console.log(hello.trimStart());

// trimEnd: Permite eliminar los espacios al final del texto

let hello = 'Hello World        ';
console.log(hello);
console.log(hello.trimEnd());

//Optional catch building

// Antes
try {

}catch (error) {
    error
}

// Ahora
try {

}catch {
    error
}

// Object.fromEntries: Podemos convertir un objeto en una matriz (inverso a Object.entries)

let entries = [['name', 'oscar'], ['age', 32]];
console.log(Object.fromEntries(entries));

// Symbol.prototype.description: Permite regresar el description opcional del symbol

let mySymbl = 'My Symbol';
let symbol = Symbol(mySymbl);
console.log(symbol.description);


