import chalk from "chalk";
let current_users = ["hummad", "bazil", "ali", "saif", "ubait"];
let new_users = ["usama", "zain", "bazil", "hamza", "saif"];
new_users.forEach(one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === one_user.toLowerCase());
    if (our_condition) {
        console.log(chalk.redBright(`\nsorry ${one_user} is already taken`));
    }
    else {
        console.log(chalk.blueBright(`\nThis user ${one_user} is avaible`));
    }
});
