const formulario = document.getElementById("contenido")
const cuerpo = document.getElementById("cuerpo")


function palindromo(palabra){
    let comparar = ""
    
    for(let i=0; i < palabra.length; i++){
      comparar += palabra[palabra.length -i -1]
    }
    console.log(comparar === palabra)
    return comparar === palabra
  }

function agregar(){
    if(formulario.value){
       // console.log("muestro si es true o false: "+ palindromo(formulario.value))
       // console.log(formulario.value + " es ese el valor")

        if(palindromo(formulario.value)){
            //console.log("ahora debo agregar un elemento con true")
            let nuevo = document.createElement("div")
            nuevo.innerHTML= `Es un palindromo ${formulario.value}`
            cuerpo.appendChild(nuevo)
            cuerpo.lastChild.textContent = `${formulario.value} es un palindromo`
            
        } else {
            //console.log(" este es el caso falso, debo agregar algo que diga que no es un palindromo")
            let nuevo = document.createElement("div")
            nuevo.innerHTML= `Es un palindromo ${formulario.value}`
            cuerpo.appendChild(nuevo)
            cuerpo.lastChild.textContent = `${formulario.value} NO NO NO ES PALINDROMO`
        }

    }else{ alert("No ingreso ninguna palabra")}

    formulario.value = ""
}

//prevenir default

document.getElementById("botonEnviar").addEventListener("click", function(event){
    event.preventDefault()
  })