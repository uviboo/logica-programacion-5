const secretNum = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function calcularAdivinanza() {
  while (true) {
    let numeroInput = document.getElementById("numeroInput").value;

    if (numeroInput === null || numeroInput === "") {
      break;
    }

    const intento = parseInt(numeroInput);

    if (isNaN(intento)) {
      document.getElementById("resultado").innerHTML =
        "Por favor, ingrese un número válido.";
      break;
    }

    intentos++;

    if (intento === secretNum) {
      document.getElementById(
        "resultado"
      ).innerHTML = `¡Yay! Has adivinado el número secreto en ${intentos} intentos.`;
      break;
    } else if (intento < secretNum) {
      document.getElementById("resultado").innerHTML =
        "El número secreto es mayor. ¡Intenta de nuevo! :(";
      break;
    } else {
      document.getElementById("resultado").innerHTML =
        "El número secreto es menor. ¡Intenta de nuevo! :(";
      break;
    }
  }
}
