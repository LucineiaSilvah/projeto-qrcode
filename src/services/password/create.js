import chalk from "chalk";
import handle from "./handle.js";


async function createPASSWORD() {
const password = await handle()

console.log(chalk.bgGreen("password gerado:" + password));

  
}

export default createPASSWORD