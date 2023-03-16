import readline from 'readline';
import chalk from 'chalk';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let properties = [];

function askProperty() {
  rl.question('Digite uma propriedade de CSS ou SAIR para sair: ', (answer) => {
    if (answer.toUpperCase() === 'SAIR') {
      properties.sort();
      console.log(chalk.yellow.bold('Propriedades CSS em ordem alfabética:'));
      properties.forEach(prop => console.log(chalk.green(prop)));
      rl.close();
    } else {
      properties.push(answer);
      askProperty();
    }
  });
}

askProperty();
