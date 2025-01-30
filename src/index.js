import prompt from "prompt";
import promptSchemaMain from "./prompts-schemas/prompt-schemas-main.js";
import createQRCODE from "./services/qr-code/create.js";
import createPASSWORD from "./services/password/create.js";
import chalk from "chalk";
async function main() {
  console.log(chalk.green.bold("BEM VINDO(A) AO KIT FERRAMENTAS TECH"));
  
  prompt.get(promptSchemaMain, async function (err, choose) {
    choose.select == 1 ? await createQRCODE() : err;
    choose.select == 2 ? await createPASSWORD() : err;
  });

  prompt.start();
}

main();
