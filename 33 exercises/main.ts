import chalk from "chalk"

let number=[1,2,3,4,5,6,7,8,9];

for(let one_number of number) {
    let ordinal_ending:string
    if(one_number === 1) {
        ordinal_ending = "st"
    }
    else if (one_number === 2 ) {
        ordinal_ending = "nd"
    }
    else if (one_number === 3) {
        ordinal_ending = "rd"
    }
    else {
        ordinal_ending = "th"
    }
    
    console.log(`${chalk.redBright(one_number)}${chalk.red(ordinal_ending)}`);
}