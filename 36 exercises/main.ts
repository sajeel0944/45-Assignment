import chalk from "chalk"

function shirt(size:string , print:string){
    console.log(chalk.blueBright(`you selected ${chalk.greenBright(size)} size shirt with ${chalk.greenBright(print)} print on shirt`))
}

shirt("large","sajeel")