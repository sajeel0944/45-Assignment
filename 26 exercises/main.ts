import chalk from "chalk";

let aliencolor = "green";

if (aliencolor === "green") {
  console.log( chalk.greenBright("player just earned 5 point for shootion the alien") );
} 
else {
     console.log(chalk.green("player just earned 10 point"));
}

if (aliencolor === "blue") {
  console.log(chalk.blueBright("player just earned 5 point for shootion the alien"));
} 
else {
    console.log(chalk.blue("player just earned 10 point"));
}
