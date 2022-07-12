function newfunction(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

// es6

function newfunction2(name = 'oscar', age = 32, country = 'MX') {
    console.log(name, age, country);
};

newfunction2();
newfunction2('Ricardo', '23', 'CO');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`; //Ahora con em6 se puede concatenar elementos con comillas invertidas
console.log(epicPhrase2);

// Multilínea en los string

// - Antes se hacía así:

let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
+ "Otra frase épica que necesitamos."

// - es6

let lorem2 = `otra frase épica que necesitamos
ahora es otra frase épica
`;

console.log(lorem);
console.log(lorem2);

// Destructuración de elementos

let person = {
    'name': 'oscar',
    'age': '32',
    'country': 'MX'
}

// - Antes
console.log(person.name, person.age);

// - es6
let { name, age } = person;
console.log(name, age);


// Spread Operator

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = [ 'Valeria', 'Jessica', 'Camila'];

let education = [ 'David', ...team1, ...team2];

console.log(education);


// Var (global vs Let(scope))

{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);
// console.log(globalLet); No podemos acceder . Tenemos que colocar el console.log dentro del scope de let

//Const
// - No se puede easignar un valor a una constante

const a = "b";
a = "a"; // No se puede reasignar este valor a la constante a

// Asignación de objetos

let name = 'Oscar';
let age = 32;

// es5
obj = { name: name, age: age};

// es6
obj2 = { name, age};
console.log(obj2);

// Arrow functions

const names = [
    { name: 'Oscar', age: 32 },
    { name: 'Jessica', age: 27 }
]

let listOfNames = names.map(function (item) {
    console.log(item.name);
}) 

// - es6

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {    // Otra forma
    ...
}

const lisOfNames4 = name => {                    // Otra forma al pasar un solo parámetro
    ...
}

const square = num => num * num; // En este caso no tengo que generar un return. es más directo

// Promesas

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        }else {
            reject('Ups!!');
        }
    })
}

helloPromise()
.then(response => console.log(response))
.catch(error => console.log(error));