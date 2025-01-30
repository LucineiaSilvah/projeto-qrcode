import chalk from "chalk";

const promptSchemaQRCode = [
  {
    name: "link",
    description: chalk.yellow("digite o link para gerar o QR-CODE"),
    pattern:/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
    message:chalk.red('link digitado não esta em uma padrão valido'),
    required:true,
  },
  {
    name: "type",
    description: chalk.magenta.italic(
      "escolha modo de visualização [1]imagem , [2]terminal"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red("escolha apenas entre 1 e 2"),
    required: true,
  },
];

export default promptSchemaQRCode;
