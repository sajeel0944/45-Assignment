import chalk from "chalk";

let personName="sajeel ullah khan";
//lowercase
console.log(chalk.blue(personName.toLowerCase()));
//uppercase
console.log(chalk.green(personName.toUpperCase()));
// titlecase
console.log(chalk.red(personName.replace(/\b\w/g,(char)=>char.toUpperCase())));