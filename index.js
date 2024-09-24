function inverteString(str) {
    let stringInvertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    return stringInvertida;
}


let stringOriginal = "Exemplo de string";
let stringInvertida = inverteString(stringOriginal);
console.log("String invertida:", stringInvertida);
