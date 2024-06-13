/*3- Altere o código um(1) desse conteúdo para funcionar
com números e ter duas colunas.
nome: Letícia Calixto Diniz */
console.clear();
const teclado3 = require(`Prompt-sync`)();
let minhaMatriz3: number [][] = [];

let linha3 = 2;
let coluna3 = 2;

for (let z = 0; z < linha3; z++) {
    minhaMatriz3[z] = [];

    for (let x = 0; x < coluna3; x++) {
        let numero3: number = parseFloat(teclado3(`Digite o número que vai estar no endereço [${z}, ${x}] da matriz: `));
        
        minhaMatriz3[z][x] = numero3;
    }
}
console.log(minhaMatriz3); 