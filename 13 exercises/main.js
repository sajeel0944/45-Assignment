import chalk from "chalk";
let transportationModes = ["Bike", "Bus", "Car", "sport car"];
transportationModes.forEach((connect) => console.log(chalk.blue(`I would like to own a ${chalk.magentaBright(connect)}`)));
