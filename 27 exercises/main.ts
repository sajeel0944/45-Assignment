import chalk from "chalk";

let aliencolor1 = "green";

if (aliencolor1 === "green") {
    console.log(chalk.greenBright("\n(1)  you shot down green alien you have earned 5 point"));
}
else if (aliencolor1 === "yellow") {
    console.log(chalk.greenBright("\n(1)  you shot down yellow alien you have earned 10 point"))
}
else if (aliencolor1 === "red") {
    console.log(chalk.greenBright("\n(1)  you shot down red alien you have earned 15 point"))
}
 
let aliencolor2 = "yellow";

if (aliencolor2 === "green") {
    console.log(chalk.yellowBright("\n(2)  you shot down green alien you have earned 5 point"));
}
else if (aliencolor2 === "yellow") {
    console.log(chalk.yellowBright("\n(2)  you shot down yellow alien you have earned 10 point"))
}
else if (aliencolor2 === "red") {
    console.log(chalk.yellowBright("\n(2)  you shot down red alien you have earned 15 point"))
}

let aliencolor3 = "red";

if (aliencolor3 === "green") {
    console.log(chalk.redBright("\n(3)  you shot down green alien you have earned 5 point"));
}
else if (aliencolor3 === "yellow") {
    console.log(chalk.redBright("\n(3)  you shot down yellow alien you have earned 10 point"))
}
else if (aliencolor3 === "red") {
    console.log(chalk.redBright("\n(3)  you shot down red alien you have earned 15 point"))
}