console.clear();
var teclado = require("Prompt-sync")();
var minhaMatriz = [];
var linha = 2;
var coluna = 4;
for (var z = 0; z < linha; z++) {
    minhaMatriz[z] = [];
    for (var x = 0; x < coluna; x++) {
        var nome = teclado("Digite o nome que vai estar no endere\u00E7o [".concat(z, ", ").concat(x, "] da matriz: "));
        minhaMatriz[z][x] = nome;
    }
}
console.log(minhaMatriz);
