function printResult(resultado) {
    document.getElementById("resultado").innerHTML = resultado;
}

function valores_encriptado(letra) {
    /*
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"*/
    if (letra === "a"){
        return "ai";
    } else if (letra === "e"){
        return "enter";
    } else if (letra === "i"){
        return "imes";
    } else if (letra === "o"){
        return "ober";
    } else if (letra === "u"){
        return "ufat";
    } else {
        return letra;
    }
}

function encriptar() {
    let texto = document.getElementById("texto").value;
    let textoEncriptado = ""
    for (let i = 0; i < texto.length; i++) {
        textoEncriptado += valores_encriptado(texto[i]);
    }
    printResult("<p>" + textoEncriptado + "</p>");
}