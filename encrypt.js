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

function valores_desencriptado(letra) {
    if (letra === "a"){
        return ["a", 1];
    } else if (letra === "e"){
        return ["e", 4];
    } else if (letra === "i"){
        return ["i", 3];
    } else if (letra === "o"){
        return ["o", 3];
    } else if (letra === "u"){
        return ["u", 3];
    } else {
        return [letra, 0];
    }
}

function encriptar() {
    let texto = document.getElementById("texto").value;
    let textoEncriptado = ""
    for (let i = 0; i < texto.length; i++) {
        textoEncriptado += valores_encriptado(texto[i]);
    }
    printResult(textoEncriptado);
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    /* let textoDesencriptado = texto.replaceAll("enter", "e").replaceAll("ufat", "u").
    replaceAll("ober", "o").replaceAll("imes", "i").
    replaceAll("ai", "a");*/
    let textoDesencriptado = ""
    let validacion = []
    for (let i = 0; i < texto.length; i++) {
        validacion = valores_desencriptado(texto[i]);
        textoDesencriptado += validacion[0];
        i += parseInt(validacion[1]);
    }
    printResult(textoDesencriptado);
}

function copyClipboard() {
    let valor = document.getElementById("resultado").innerText;
    navigator.clipboard.writeText(valor);
    alert("¡Resultado copiado!");
}