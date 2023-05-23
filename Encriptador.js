/* Funcion para encriptar mensajes*/
function encriptar(){
    var textoParaEncriptar = document.getElementById("texto").value;
    var botonCopiar = document.getElementById("botonCopiar");
    var textoEncriptado = textoParaEncriptar.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");

    if(textoParaEncriptar.length !=0){
        document.getElementById("texto-copiar").value = textoEncriptado;
        boton();
    }else{
        alert("Debes ingresar un texto");
        botonCopiar.style.display = "none";
    }
}

/*Funcion para desencriptar mensajes*/
function desencriptar(){
    var textoParaDesencriptar = document.getElementById("texto").value;
    var textoDesencriptado = textoParaDesencriptar.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    
    if(textoParaDesencriptar.length !=0){
        document.getElementById("texto-copiar").value = textoDesencriptado;
        boton();
    }else{
        alert("Debes ingresar un texto");
        botonCopiar.style.display = "none";
    }
}

/*Funcion para copiar texto*/
function copiarTexto(){
    var textoCopiado = document.getElementById("texto-copiar");
    textoCopiado.select();
    navigator.clipboard.writeText(textoCopiado.value);
}

/*Funcion para aparecer boton de copiado*/
function boton(){
    botonCopiar.style.display = "block";
    botonCopiar.style.position = "absolute";
    botonCopiar.style.top = "80%";
    botonCopiar.style.left = "25%";
    botonCopiar.style.backgroundColor = "#d8dfe8";
    botonCopiar.style.fontSize = "1.2em";
    botonCopiar.style.color = "black";
    botonCopiar.style.textAlign = "center";
    botonCopiar.style.padding = "4% 20%";
    botonCopiar.style.border = "1px solid #0a3871";
    botonCopiar.style.borderRadius = "2em";
}