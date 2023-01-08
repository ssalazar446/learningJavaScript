//Con querySelector pide que espefique la etiqueta
//h1 es en genera, si tuviera una clase se llama igual que CSS
// ejemplo: .styleh1
// con id: #styleh1

//Todo esto es METODOS para seleccionar elementos del HTML
const h1 = document.querySelector('h1') 

//Aquí solo selecciona a la primera coincidencia
//si se cambia a querySelectorAll, selecciona todas las etiquetas p
const p = document.querySelectorAll('p') 
const parrafito = document.getElementsByClassName('.parrafito') //Llamando la clase
const pid = document.getElementById('pid') //Llamando el id
const input = document.querySelector('input') //Llamando el input

console.log(input.value);
console.log({
    h1, 
    p, 
    parrafito, 
    pid, 
    input
});

h1.innerHTML = 'Patito <br> Feo'; //Esto permite modificar el texto y aplicar codigo HTML
h1.innerText = 'Patito <br> Feo'; //Esto lo protege de ataques y queda un texto plano

/* modificar atributos HTML */
//Darle una clase a un elemento HTML && modificar una clase
//getAttribute ayuda a leer
//class es el atributo en el HMTL
console.log(h1.getAttribute('class'));
//Con esto se logra cambiar la clase de verde a rojo
//primero es la clase a modificar y luego su valor
//h1.setAttribute('class', 'rojo')

/* Con clases*/
//Esto le AGREGA la clase rojo a la ya existente
h1.classList.add('rojo')
h1.classList.remove('verde') //Eliminar la clase verde
/* h1.classList.toggle('verde') //Si ya tiene la clase se le puede quitar y poner
h1.classList.contains('verde') //Condicional, si tiene la clase determinada */

input.value ="456" //modificar el input

/* crear elemento desde cero*/
//crear elementos HTML
const img = document.createElement('img')
//src = source y luego va el link de la imagen
img.setAttribute('src', 'https://assets.stickpng.com/images/5aafb0c37603fc558cffc0bb.png')
console.log(img);
//Borrar el contenido
pid.innerHTML = ""
//se inserta la imagen dentro de un contenedor, dentro de un elemento que ya existe en el HTML
pid.appendChild(img)

/* ESCUCHANDO EVENTOS DE JAVASCRIPT ---- INTERACTUANDO CON EL USUARIO */
