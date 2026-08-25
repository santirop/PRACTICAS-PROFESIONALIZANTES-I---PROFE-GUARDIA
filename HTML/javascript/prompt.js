import promptSync from 'prompt-sync';
const prompt = promptSync();
const nombre = prompt('¿Cómo te llamas? ');
console.log(`¡Bienvenido a la clase de programación, ${nombre}!`);