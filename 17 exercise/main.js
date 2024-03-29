import chalk from "chalk";
let guestname = ["Hummad", "Ubait", "Bazil", "Ali"];
let dontcome = guestname[0];
console.log(chalk.redBright(dontcome), chalk.red("I am not coming\n"));
guestname.splice(0, 1, "kawish");
console.log(chalk.yellowBright("Good news ! we heve found a bigger table for Dinner\n"));
guestname.unshift("Bilawal");
guestname.push("Babar");
let middle = Math.floor(guestname.length / 2);
guestname.splice(middle, 0, "saif");
guestname.forEach((guest) => console.log(chalk.blue(`salam ${chalk.magentaBright(guest)} would you like dinner with me`)));
console.log(chalk.yellow("\nunfortunately the new dinner table want arrive on time. so I can only invite two guest to dinner with me \n"));
while (guestname.length > 2) {
    let removedguest = guestname.pop();
    console.log(chalk.blue(`sorry ${chalk.magentaBright(removedguest)} I can invite you to dinner`));
}
console.log(chalk.yellowBright("\nInvitation to the last 2 guest \n"));
guestname.forEach((last_two) => console.log(chalk.blue(`lucky ${chalk.magentaBright(last_two)} you are still invite to dinner`)));
guestname.pop();
guestname.pop();
console.log(chalk.greenBright("\nEmpty list"), guestname);
