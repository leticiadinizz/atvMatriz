/*6-Crie uma matriz 3x3 com entrada manual de números
aceitando somente números de 0 a 9. Em seguida,
exiba a matriz na tela.
nome:*/
console.clear();
var teclado6 = require("Prompt-sync")();
var matrizSeis = [];
var linha6 = 3;
var coluna6 = 3;
for (var z = 0; z < linha6; z++) {
    matrizSeis[z] = [];
    for (var x = 0; x < coluna6; x++) {
        var numero6 = parseFloat(teclado6("Digite um n\u00FAmero de 0 a 9 que vai estar no endere\u00E7o [".concat(z, ", ").concat(x, "] da matriz: ")));
        if (numero6 > 9 || numero6 < 0) {
            console.log("O n\u00FAmero digitado n\u00E3o \u00E9 de 0 a 9!!");
            console.log("Tente outro");
            x--;
        }
        else {
            matrizSeis[z][x] = numero6;
        }
    }
}
console.log(matrizSeis);
