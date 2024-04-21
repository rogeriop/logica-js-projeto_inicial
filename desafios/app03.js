
// 03 Loops e Tentativas

const read = require('readline-sync');

// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
/*
console.clear();
for(let x = 1; x <= 10; x++) {
    console.log(`Contando de 1 ate 10 ${x}`);
}
*/

// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let x = 10;
console.clear();
while(x > 0) {
    console.log(x);
    x--;
}


// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let numeroPedidoRegressivo = Number(read.question('Informe um numero para contagem regressiva:').replace(',','.')).toFixed(0);
console.clear();
while(numeroPedidoRegressivo > 0) {
    console.log(numeroPedidoRegressivo);
    numeroPedidoRegressivo--;
}

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let numeroPedidoProgressivo = Number(read.question('Informe um numero para contagem progressiva:').replace(',','.')).toFixed(0);
let y = 1;
/*
for(let i = 1; i <= numeroPedidoProgressivo; i++) {
    console.log(i);
}
*/
while(y <= numeroPedidoProgressivo) {
    console.log(y);
    y++;
}

