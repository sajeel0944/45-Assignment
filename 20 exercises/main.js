import chalk from "chalk";
let CitiesName = ["1\tKarachi", "2\tLahore", "3\tMultan", "4\tIslamabad", "5\tQuetta"];
console.log(chalk.yellowBright("List of Cities Name"));
CitiesName.forEach(Cities => console.log(chalk.blueBright(Cities)));
