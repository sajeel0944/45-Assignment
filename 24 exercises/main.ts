import chalk from "chalk";

// equality and inequality

let A="mango";

console.log(chalk.blueBright("Is mango is equal to mango"));
console.log(A == "mango");

console.log(chalk.redBright("\nIs mango is notequal to mango"));
console.log(A != "mango");

let uppercaseMango="mango";

console.log(chalk.blueBright("\nIs mango is equal to mango after converting to lowercase"));
console.log(uppercaseMango.toLowerCase()=="mango");

console.log(chalk.redBright("\nIs mango is notequal to mango after converting to lowercase"));
console.log(uppercaseMango.toLowerCase()!="mango");

//number Tests

let six=6;
let ten=10;

console.log(chalk.redBright("\nIs six equal to ten"));
console.log(six == ten);

console.log(chalk.blueBright("\nIs six notequal to ten"));
console.log(six != ten);

console.log(chalk.blueBright("\nIs six is greater than zero"));
console.log(six > 0);

console.log(chalk.redBright("\nIs ten is less than six"));
console.log(ten < six);

console.log(chalk.blueBright("\nsix is greater than or equal to 5"));
console.log(six >= 5);

console.log(chalk.redBright("\nten is less than or equal to 6"));
console.log(ten <= 6);

console.log(chalk.blueBright("\nten is not equal to 6 and ten is greater than 6"));
console.log(ten != 6 && ten > 6);

console.log(chalk.redBright("\nten is notequal to 6 and is greater than 6"))
console.log(ten !=6 && ten >35)

console.log(chalk.blueBright("\n10 is greater than 35 oR 10 is equal to 10"));
console.log(10 > 35 || 10 == 10);

console.log(chalk.redBright("\n10 is greater than 35 OR 10 is not equal to 10"));
console.log(20 > 35 || 10 != 10);

let name=["sajeel","bazil","Ali"];

console.log(chalk.blueBright("\nIs Ali include in array "));
console.log(name.includes("Ali"));

console.log(chalk.redBright("\nIs Ali not include in name array "));
console.log(!name.includes("Ali"));



