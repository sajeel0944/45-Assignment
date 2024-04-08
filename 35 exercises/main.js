import chalk from "chalk";
let pet_animals = ["Bull", "cat", "bog"];
for (let new_pet_animals of pet_animals) {
    console.log(chalk.blueBright(`\n A ${chalk.blue(new_pet_animals)} would a great pet`));
}
console.log(chalk.green("\n Any of these animal would make a great pet"));
