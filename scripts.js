/**MOSTRAR MENSAJES A LOS USUARIOS
 * el metodo alert("")
 */

//alert("Hola desde javaScript.")

//console.log("Este es un mensaje que se muestra en la consola de navegador")

//document.write("Hola a todos desde el DOM")
//prompt("ingresa tu edad"

//sumarnumeros()
/*function sumarnumeros(){
    let num1=parseInt(prompt("Ingresa el primer numero"))
    let num2=parseInt(prompt("Ingresa el segundo numero"))
    let suma= num1+num2
    alert("La suma de los numeros es => " + suma)
}*/

/*function CambiarMensaje(idDiv){
    let mensaje=prompt("escribe tu mensaje")
    document.getElementById(idDiv).innerHTML=mensaje
}*/

function pintarNumero(numero) {
    //document.getElementById("data").value=numero
    pintarDatos(numero)
}

function pintarOperador(operador) {
    //document.getElementById("data").value=operador
    pintarDatos(` ${operador} `)
}

function pintarDatos(dato) {
    let valorinput = document.getElementById("data");
    // valorinput.value=valorinput.value +" "+ dato;
    valorinput.value = `${valorinput.value}${dato}`
}


function limpiar() {
    document.getElementById("data").value = null
}

function mostarResultado() {
    let valorinput = document.getElementById("data").value
    let arreglo = valorinput.split(' ')


    /*if (arreglo[1] == "+") {
        let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
        document.getElementById("data").value = suma
    } else if (arreglo[1] == "-") {
        let resta = parseInt(arreglo[0]) - parseInt(arreglo[2])
        document.getElementById("data").value = resta
    } else if (arreglo[1] == "*") {
        let multiplicar = parseInt(arreglo[0]) * parseInt(arreglo[2])
        document.getElementById("data").value = multiplicar
    } else {
        let dividir = parseInt(arreglo[0]) / parseInt(arreglo[2])
        document.getElementById("data").value = dividir
    }*/


    switch (arreglo[1]) {
        case "+":
            let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
            document.getElementById("data").value = suma
            break;
        case "-":
            let resta = parseInt(arreglo[0]) - parseInt(arreglo[2])
            document.getElementById("data").value = resta
            break;
        case "*":
            let multiplicar = parseInt(arreglo[0]) * parseInt(arreglo[2])
            document.getElementById("data").value = multiplicar
            break;

        case "/":
            let dividir = parseInt(arreglo[0]) / parseInt(arreglo[2])
            document.getElementById("data").value = dividir
            break;
        default:
            alert("Esta no es una opcion valida")
    }

    //let suma=parseInt(arreglo[0]) + parseInt(arreglo[2])
    //document.getElementById("data").value = suma



}


function preguntarDia() {
    //prompt("¿Que dia es hoy?")
    let dia = prompt("!Escribe el dia de la semana!");

    switch (dia) {
        case "lunes":
            alert("En ingles se escribe: Monday")
            break;
        case "martes":
            alert("En ingles se escribe: Tuesday ")
            break;
        case "miercoles":
            alert("En ingles se escribe: Wednesday")
            break;

        case "jueves":
            alert("En ingles se escribe: Thursday")
            break;
        case "viernes":
            alert("En ingles se escribe: Friday")
            break;

        case "sabado":
            alert("En ingles se escribe: Saturday")
            break;
        case "domingo":
            alert("En ingles se escribe: Sunday")
            break;

        default:
            alert("¡INVALIDO!...Escriba el dia por favor")
    }

}

