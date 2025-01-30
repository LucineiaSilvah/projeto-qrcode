import chalk from "chalk";

const promptSchemaMain = [
  {
    name:"select",
    description:chalk.magenta.italic("escolha a ferramenta [1]qrcode [2]password)"),
    pattern:/^[1-2]+$/,
    message:"escolha apenas entre opção 1 e 2",
    required:true
  }
]

export default promptSchemaMain;