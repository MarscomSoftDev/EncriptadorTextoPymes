let encriptar = document.getElementById("button__encriptar");
let desencriptar = document.getElementById("button__desencriptar");
let copy = document.getElementById("button__copiar");
let textoInicial = document.getElementById("textoInput");
let textFinal = document.getElementById("textoFinal");
let muneco = document.getElementById("muneco");
let textInfo = document.getElementById("textoInfo");
let rigth = document.getElementById("rigth");

// Array para almacenar las reglas de sustitución personalizadas
let remplazar = [];

// Solicitar reglas de sustitución al usuario
const configurarReglas = () => {
  let continuar = true;

  while (continuar) {
    let original = prompt(
      "Ingrese la letra que desea sustituir (o presione Cancelar para finalizar):"
    );
    if (!original) break;

    let sustituto = prompt(
      `Ingrese la sustitución para la letra "${original}":`
    );
    if (!sustituto) break;

    remplazar.push([original.toLowerCase(), sustituto.toLowerCase()]);
    continuar = confirm("¿Desea agregar otra regla de sustitución?");
  }

  if (remplazar.length === 0) {
    alert(
      "No se configuraron reglas de sustitución. Usando reglas predeterminadas."
    );
    remplazar = [
      ["e", "enter"],
      ["o", "ober"],
      ["i", "imes"],
      ["a", "ai"],
      ["u", "ufat"],
    ];
  }
};

// Llamar a la configuración de reglas al inicio
configurarReglas();

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
