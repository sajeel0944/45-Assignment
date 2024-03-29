import chalk from "chalk";

let guestname = ["Hummad", "Ubait", "Bazil", "Ali"];

let dontcome = guestname[0];

console.log(chalk.redBright(dontcome), chalk.red("I will not come\n"));

guestname.splice(0, 1, "kawish");

console.log(chalk.yellowBright("Good news ! we heve found a bigger table for Dinner\n"));

guestname.unshift("Bilawal");

guestname.push("Babar");

let middle: number = Math.floor(guestname.length / 2);

guestname.splice(middle, 0, "saif");

guestname.forEach((guest) =>console.log(chalk.blue(`salam ${chalk.magentaBright(guest)} would you like dinner with me`)));
