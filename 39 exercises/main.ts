import chalk from "chalk"

function describe_city(city:string,country:string):string{
    return `${chalk.greenBright(city)} , ${chalk.greenBright(country)}`;
}

console.log(describe_city("Karachi","Pakistan"));
console.log(describe_city("Multan","Pakistan"));
console.log(describe_city("Chicago","America"));