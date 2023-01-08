const h1 = document.querySelector('h1') 
const input1 = document.querySelector('#calculo1') 
const input2 = document.querySelector('#calculo2') 
const btn = document.querySelector('#btnCalcular') 
//Se guarda en esta variable el resultado
const pResult = document.querySelector('#result') 


//una de las formas de escuchar eventos es en el HTML agregar el atributo "onclick="" " o "onchange="" "
//sintaxis:
/* <input onchange="nombreFuncion()" id="calculo2" placeholder="Escribe algo aquí">
    <button id="btnCalcular" onclick="">Calcular</button> */


function eventoClickBoton() {
    // Unary plus (+) precediento el simbolo + se le cambia el valor y ya NO CONCATENA sino que hace la suma
    //si se quiere concatenar es simplemente esto: input1.value + input2.value
    const sumaInputs = +input1.value + +input2.value
    //imprime el resultado
    pResult.innerHTML = "Resultado de la suma: " + sumaInputs
}