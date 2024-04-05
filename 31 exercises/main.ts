import chalk from "chalk";

let userName = ["Ali", "Hummad", "Ubait", "Saif", "Bazil"];
userName=[]
if (userName.length === 0) {
    console.log(chalk.blueBright("your array in empty we need to find some user"));
} else {

userName.forEach((oneuser) => {
  if (oneuser === "Saif") {
    console.log(chalk.red(`Hello ${chalk.magentaBright(oneuser)} would you like to a status report`));
  } else {
    console.log(chalk.blue(`Hello ${chalk.magentaBright(oneuser)} that for logging again`));
  }
});
}