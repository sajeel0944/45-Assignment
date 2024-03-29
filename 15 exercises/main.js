import chalk from "chalk";
let guestName = ["Hummad", "Ubait", "Bazil", "Ali"];
let dontcome = guestName[0];
console.log(chalk.redBright(dontcome), chalk.red("I will not come\n"));
guestName.splice(0, 1, "kawish");
guestName.forEach((guest) => console.log(chalk.blue(`salam ${chalk.magentaBright(guest)} would you like to dinner with me`)));
