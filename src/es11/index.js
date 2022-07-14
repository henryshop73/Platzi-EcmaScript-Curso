// Dynamic import : Permite llamar nuestro código cuando lo necesitemos

const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hello();
});

// BigInt

const aBigNumber = 9007199254740991n;
const anotherBigNunber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNunber);

// Promise.allSettled()

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => reject("resolve"));
const promise3 = new Promise((resolve, reject) => reject("resolve1"));

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response));


// globalThis

console.log(window); //aquí no se podrá acceder
console.log(globalThis);

// Nullish coalescing operator(??)

const fooo = null ?? 'default string';
console.log(fooo);

// Optional chaining(?)

const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log('email')
}else {
    console.log('fail');
}
