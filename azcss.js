import readline from 'readline';
import chalk from 'chalk';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let propriedades = [];

function pedirPropriedade() {
  rl.question(chalk.blue('Digite uma propriedade de CSS ou "SAIR" para finalizar: '), (resposta) => {
    if (resposta.toUpperCase() === 'SAIR') {
      imprimirPropriedadesOrdenadas();
      rl.close();
    } else {
      propriedades.push(resposta.trim());
      pedirPropriedade();
    }
  });
}

function imprimirPropriedadesOrdenadas() {
  console.log(chalk.yellow('Propriedades de CSS ordenadas de A-Z:'));
  propriedades.sort().forEach(propriedade => {
    console.log(chalk.green(propriedade));
  });
}

pedirPropriedade();
