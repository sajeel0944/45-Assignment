import chalk from "chalk";

let countriesname:string[]=["china","Denmark","Brazil","Argentina"];
console.log(chalk.magentaBright("Orginal:"),countriesname);

console.log(chalk.magentaBright("\nAlphabetical order:"),[...countriesname].sort());

console.log(chalk.magentaBright("\nStill in orginalorder:"),countriesname);

console.log(chalk.magentaBright("\nReverse order:"),[...countriesname].reverse());

console.log(chalk.magentaBright("\nBack to orginal order:"),countriesname.reverse());

console.log(chalk.magentaBright("\nsorted in Alphabetical order:"),countriesname.reverse());

console.log(chalk.magentaBright("\nOrginal Array Reversed:"),countriesname.reverse());