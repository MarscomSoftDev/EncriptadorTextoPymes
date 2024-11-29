let encriptar = document.getElementById("button__encriptar");
let desencriptar = document.getElementById("button__desencriptar");
let copy = document.getElementById("button__copiar");
let textoInicial = document.getElementById("textoInput");
let textFinal = document.getElementById("textoFinal");
let muneco = document.getElementById("muneco");
let textInfo = document.getElementById("textoInfo");
let rigth = document.getElementById("rigth");

let remplace = (newvalue) => {
  textFinal.innerHTML = newvalue;
  textFinal.classList.add("ajustar");
  rigth.classList.add("ajuste");
  textoInicial.value = "";
  textoInicial.style.height = "auto";
  textoInicial.placeholder = "Ingrese el texto aquí";
  muneco.classList.add("ocultar");
  textInfo.classList.add("ocultar");
  copy.classList.remove("bn_ocultar");
};

let reset = () => {
  textoInicial.value = "";
  textoInicial.style.height = "auto";
  textFinal.innerHTML = "";
  rigth.classList.remove("ajuste");
  textFinal.classList.remove("ajustar");
  muneco.classList.remove("ocultar");
  textFinal.placeholder = "Ningún mensaje fue encontrado";
  textInfo.classList.remove("ocultar");
  copy.classList.add("bn_ocultar");
  textoInicial.focus();
};

let remplazar = [
  ["e", "enter"],
  ["o", "ober"],
  ["i", "imes"],
  ["a", "ai"],
  ["u", "ufat"],
];

encriptar.addEventListener("click", () => {
  let texto = textoInicial.value.toLowerCase();

  if (texto != "") {
    function encript(newtext) {
      for (let i = 0; i < remplazar.length; i++) {
        if (newtext.includes(remplazar[i][0])) {
          newtext = newtext.replaceAll(remplazar[i][0], remplazar[i][1]);
        }
      }
      return newtext;
    }
    remplace(encript(texto));
  } else {
    alert("Ingrese texto para encriptar");
    reset();
  }
});

desencriptar.addEventListener("click", () => {
  let texto = textoInicial.value.toLowerCase();

  if (texto != "") {
    function desencript(newtext) {
      for (let i = 0; i < remplazar.length; i++) {
        if (newtext.includes(remplazar[i][1])) {
          newtext = newtext.replaceAll(remplazar[i][1], remplazar[i][0]);
        }
      }
      return newtext;
    }
    remplace(desencript(texto));
  } else {
    alert("Ingrese texto a desencriptar");
    reset();
  }
});

copy.addEventListener("click", () => {
  let texto = textFinal;
  texto.select();
  document.execCommand("copy");

  alert("Texto Copiado");
  reset();
});

textoInicial.addEventListener("change", (e) => {
  textoInicial.style.height = "auto";
  let scHeight = e.target.scrollHeight;
  textoInicial.style.height = `${scHeight}px`;
});
textoInicial.addEventListener("keyup", (e) => {
  textoInicial.style.height = "auto";
  let scHeight = e.target.scrollHeight;
  textoInicial.style.height = `${scHeight}px`;
});
