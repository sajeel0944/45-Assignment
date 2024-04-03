import chalk from "chalk";
let age = 14;
if (age < 2) {
    console.log(chalk.blueBright("you are a bady"));
}
else if (age >= 2 && age < 13) {
    console.log(chalk.blueBright("you are a toddler"));
}
else if (age >= 13 && age < 20) {
    console.log(chalk.blueBright("you are a Teenager"));
}
else if (age >= 20 && age < 65) {
    console.log(chalk.blueBright("you are a Adults"));
}
else if (age >= 65) {
    console.log(chalk.blueBright("you are Eluders"));
}
