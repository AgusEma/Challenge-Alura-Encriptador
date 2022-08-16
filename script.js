function encriptar() {
  var texto = document.getElementById("input-text").value.toLowerCase();
  
  var textoCifrado = texto.replace(/e/gm, "enter");
  var textoCifrado = textoCifrado.replace(/o/gm, "ober");
  var textoCifrado = textoCifrado.replace(/i/gm, "imes");
  var textoCifrado = textoCifrado.replace(/a/gm, "ai");
  var textoCifrado = textoCifrado.replace(/u/gm, "ufat");

  document.getElementById("muneco").style.display = "none";
  document.getElementById("texto-muneco").style.display = "none";
  document.getElementById("textarea-muneco").innerHTML = textoCifrado;
  document.getElementById("btn-copiar").style.display = "show";
  document.getElementById("btn-copiar").style.display = "inherit";
}

function desencriptar() {
  var texto = document.getElementById("input-text").value.toLowerCase();

  var textoCifrado = texto.replace(/enter/gm, "e");
  var textoCifrado = textoCifrado.replace(/ober/gm, "o");
  var textoCifrado = textoCifrado.replace(/imes/gm, "i");
  var textoCifrado = textoCifrado.replace(/ai/gm, "a");
  var textoCifrado = textoCifrado.replace(/ufat/gm, "u");

  document.getElementById("muneco").style.display = "none";
  document.getElementById("texto-muneco").style.display = "none";
  document.getElementById("textarea-muneco").innerHTML = textoCifrado;
  document.getElementById("btn-copiar").style.display = "show";
  document.getElementById("btn-copiar").style.display = "inherit";
}

function copiar() {
  let texto = document.getElementById("textarea-muneco");
  texto.select();
  texto.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
