
// 04 Boas práticas de programação

const read = require('readline-sync');

// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log('Seja muito bem vindo!');

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let meuNome = "Antonio";
console.log(`Ola, ${meuNome}!`);

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
let meuNomeAlert = "Antonio";
//alert(`Ola, ${meuNomeAlert}!`);

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagemEscolhida;
linguagemEscolhida = read.question('Qual a linguagem de programacao que voce mais gosta? ');
console.log(`A linguagem que voce gosta eh :${linguagemEscolhida}`);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 40;
let valor2 = 150;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} eh igual a ${resultado}`);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valor11 = 1500;
let valor22 = 350;
let resultado2 = valor11 - valor22;
console.log(`A diferenca entre ${valor11} e ${valor22} eh igual a ${resultado2}`); 

// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let suaIdade = Number(read.question('Informe a sua idade: ').replace(',','.')).toFixed(0);
if(suaIdade >= 18) {
    console.log('Voce eh maior de idade!');
} else {
    console.log('Voce eh menor de idade!')
}

// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numeroAvaliacao = Number(read.question('Informe um numero para analise: ').replace(',','.')).toFixed(0);
if(numeroAvaliacao > 0) {
    console.log('Esse numero eh positivo!'); 
} else if (numeroAvaliacao < 0) {
    console.log('Esse numero eh negativo!')
} else {
    console.log('Valor zero');
}

// Use um loop while para imprimir os números de 1 a 10 no console.
let x = 0;
while(x <= 10) {
    console.log(x);
    x++;
}

// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let notaUsuario = Number(read.question('Digite uma nota de 1 a 10: ').replace(',','.')).toFixed(0);
if(notaUsuario >= 7) {
    console.log('Aprovado!');
} else {
    console.log('Reprovado!')
}

// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numeroAleatorio = Math.random();
console.log(`Numero aleatorio = ${numeroAleatorio}`);

// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numeroAleatorioEntreUmEDez = (Math.random() * 10).toFixed(0);
console.log(`Numero aleatorio entre 1 e 10 = ${numeroAleatorioEntreUmEDez}`);

// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numeroAleatorioEntreUmECem = (Math.random() * 100).toFixed(0);
console.log(`Numero aleatorio entre 1 e 100 = ${numeroAleatorioEntreUmECem}`);

