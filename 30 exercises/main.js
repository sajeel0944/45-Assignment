import chalk from "chalk";
let userName = ["Ali", "Hummad", "Ubait", "Saif", "Bazil"];
userName.forEach((oneuser) => {
    if (oneuser === "Saif") {
        console.log(chalk.red(`Hello ${chalk.magentaBright(oneuser)} would you like to a status report`));
    }
    else {
        console.log(chalk.blue(`Hello ${chalk.magentaBright(oneuser)} that for logging again`));
    }
});
