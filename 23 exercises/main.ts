import chalk from "chalk";

//True
let four: number = 4;
let six: number = 6;
//1
console.log(chalk.blueBright("1:  4 is equal to 4"));
console.log(four == four);
//2
console.log(chalk.blueBright("2:  6 is equal to 6"));
console.log(six == six);
//3
console.log(chalk.blueBright("3:  4 is not equal to 6"));
console.log(four != six);
//4
console.log(chalk.blueBright("4:  6 is greater than 4"));
console.log(six > four);
//5
console.log(chalk.blueBright("5:  4 is smaller than 6"));
console.log(four < six);

//false

//1
console.log(chalk.greenBright("\n\n1:  4 is equal to 6"));
console.log(chalk.redBright(four == six));
//2
console.log(chalk.greenBright("2:  4 is equal to 6"));
console.log(chalk.redBright(four == six));
//3
console.log(chalk.greenBright("3:  6 is not equal to 6"));
console.log(chalk.redBright(six != six));
//4
console.log(chalk.greenBright("4:  4 is greater than 6"));
console.log(chalk.redBright(four > six));
//5
console.log(chalk.greenBright("5:  6 is smaller than 4"));
console.log(chalk.redBright(six < four));
