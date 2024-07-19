function encriptar()
{
let textoCifrar = document.getElementById("ingreso").value;
if(textoCifrar=="")
{
    alert("Por favor ingresa el texto")
}
else{
    function comprobar(textoCifrar)
    {
        return /^[a-z\s]+$/.test(textoCifrar); 
    }
    let resultadoComparacion = comprobar(textoCifrar)
    if (resultadoComparacion == false)
    {
        alert("solo letras minusculas y sin acentos")
    }
    else{
        let cambios ={
            "a":"ai",
            "e":"enter",
            "i":"imes",
            "o":"ober",
            "u":"ufat"
        }
        let textoMostrar= textoCifrar.replace(/[aeiou]/g, function(match){
            return cambios[match]
        })
        let resultado= document.getElementById("desplegado")
        resultado.innerHTML= textoMostrar
    }
return 
}
    }

    function desencriptar()
    {
    let textoCifrar = document.getElementById("ingreso").value;
    if(textoCifrar=="")
    {
        alert("Por favor ingresa el texto")
    }
    else{
        function comprobar(textoCifrar)
        {
            return /^[a-z\s]+$/.test(textoCifrar); 
        }
        let resultadoComparacion = comprobar(textoCifrar)
        if (resultadoComparacion == false)
        {
            alert("solo letras minusculas y sin acentos")
        }
        else{
            let cambios ={  "ai":"a", "enter":"e", "imes":"i", "ober":"o", "ufat":"u" }
            let textoMostrar= textoCifrar.replace(/ai|enter|imea|ober|ufat/g, function(match){
                return cambios[match]
            })
            let resultado= document.getElementById("desplegado")
            resultado.innerHTML= textoMostrar
        }
    
    }
return 
    }
function Tcopiar(){
    let textoCopiar= document.getElementById("desplegado").innerText
    navigator.clipboard.writeText(textoCopiar).then(()=>{
        alert("Mensaje copiado con exito")
    })
}      

   
