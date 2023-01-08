const h1 = document.querySelector('h1') 
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1') 
const input2 = document.querySelector('#calculo2') 
const btn = document.querySelector('#btnCalcular') 
const pResult = document.querySelector('#result') 

//Escuchador cada vez que suceda algo, ejecuta algo
//recibe 2 argumentos:
// nombre del evento que querramos ejecutar ejemplo: CLICK
// codigo javascript que queramos mandar a llamar para que se ejecute
// a diferencia del html aqui el evento eventoClickBoton va sin parentesis
// con los parentesis interpreta que debe ejecuta una función
//addEventListener pone los parentesis a la función y enviar argumentos, por lo tanto
//se puede usar como parametros en la funcion
btn.addEventListener('click', sumarInputValues)

function sumarInputValues(event) {
    //console.log({event});
    event.preventDefault();
    
    
/*     // Unary plus (+) precediento el simbolo + se le cambia el valor y ya NO CONCATENA sino que hace la suma
    //si se quiere concatenar es simplemente esto: input1.value + input2.value
    const sumaInputs = +input1.value + +input2.value */
    //Otra opcion es parseInt
    const sumaInputs2 = parseInt(input1.value) + parseInt(input2.value)

    //imprime el resultado
    //pResult.innerHTML = "Resultado de la suma: " + sumaInputs 
    pResult.innerHTML = "Resultado de la suma con parseInt: " + sumaInputs2
}