
// 02 Condicionais e concatenação

// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
 let diaDaSemana =  prompt('Informe o dia da semana:');
 if(diaDaSemana == 'Sábado' || diaDaSemana == 'Domingo') {
     alert('Bom fim de semana!');
 } else {
     alert('Boa semana!')
}

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
 let numeroRecebido = prompt('Informe um número positivo ou negativo:');
 if(numeroRecebido < 0) {
     alert('O número é negativo');
 } else {
     alert('O número informado é positivo');
 }

// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldo = 50000;
alert(`O seu saldo é ${saldo}`);

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nomeUsuario = prompt('Informe o seu nome:');
alert(`Boas vindas ${nomeUsuario}!`)
