// Dynamic import : Permite llamar nuestro código cuando lo necesitemos

const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hello();
});