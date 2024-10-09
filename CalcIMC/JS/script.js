function calculateIMC() {
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    document.getElementById("result").innerHTML = "Por favor, insira valores válidos para altura e peso";
    return;
    }
    var imc = weight / (height * height);
    var resultText = "Seu IMC é: " + imc.toFixed(2) + "<br>";
    if (imc < 18.5) {
    resultText += "Classificação: Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
    resultText += "Classificação: Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
    resultText += "Classificação: Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
    resultText += "Classificação: Obesidade Grau I";
    } else if (imc >= 35 && imc <= 39.9) {
    resultText += "Classificação: Obesidade Grau II";
    } else {
    resultText += "Classificação: Obesidade Grau III";
    }
    document.getElementById("result").innerHTML = resultText;
    }