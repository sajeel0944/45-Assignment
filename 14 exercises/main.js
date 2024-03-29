import chalk from "chalk";
let guestName = ["Hammad", "Bazil", "Ubait", "Ali"];
guestName.forEach(oneByone => console.log(chalk.blue(`Asalam ${chalk.magentaBright(oneByone)} would you like dinner with me ?`)));
