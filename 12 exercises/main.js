import chalk from "chalk";
let friendsName = ["Hammad", "Bazil", "Ubait", "Ali"];
friendsName.forEach(friendname => console.log(chalk.blue(`Hello ${chalk.magentaBright(friendname)},How are you`)));
