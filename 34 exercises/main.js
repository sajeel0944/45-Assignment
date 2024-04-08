import chalk from "chalk";
let pizza = ["Pepperoni", "Chicken fajita", "Cheese pizza"];
for (let new_pizza of pizza) {
    console.log(chalk.blueBright(`\nI like ${chalk.blue(new_pizza)} pizza`));
}
console.log(chalk.green("\npizza is love"));
