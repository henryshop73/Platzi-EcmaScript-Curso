// replaceAll : Reemplaza todas las coincidencias que encuentra en el string a diferencia de solo replace que reemplaza solo la primera coincidencia que encuentra
// Con replace
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

// Con replaceAll:
const replacedString2 = string.replace(/JavaScript/g, "Python");// Al no funcionar replaceAll utilizo esta alternativa con expresiones regulares utilizando replace
console.log(replacedString2);

// métodos Privados

class Message {
    show(val) {
        console.log(val);
    };
}

const message = new Message();
message.show('Hola!');

// En forma privada:

class Message {
    #show(val) {
        console.log(val);
    };
    get #add(val) {
        ...
    }
}

const message = new Message();
message.show('Hola!');

// Promise Any

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
.then(response => console.log(response));

//this.ref y weakref

class anyClass {
    constructor(element) {
        this.ref = new WeakRef(element)
    }
    { ... }
}

// Operadores lógicos

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ??= isFalse);
