# Projeto QR Code

Este projeto é uma aplicação de linha de comando (CLI) desenvolvida em Node.js para gerar QR Codes a partir de textos ou URLs. Ele utiliza as bibliotecas `qrcode-terminal`, `chalk` e `prompt` para criar uma experiência interativa e colorida no terminal.

## Funcionalidades

- **Gerar QR Code**: Converte texto ou URLs em QR Codes diretamente no terminal.
- **Interativo**: Permite ao usuário inserir o texto ou URL via prompt.
- **Colorido**: Utiliza cores para melhorar a legibilidade no terminal.

## Tecnologias Utilizadas

- **Node.js**: Versão 20 ou superior.
- **Dependências**:
  - `qrcode-terminal`: Gera QR Codes no terminal.
  - `chalk`: Adiciona cores ao texto no terminal.
  - `prompt`: Captura entradas do usuário de forma interativa.

## Pré-requisitos

- Node.js 20 ou superior instalado.
- npm ou yarn para gerenciamento de dependências.

## Como Configurar e Executar

Siga os passos abaixo para configurar e executar o projeto localmente.

### 1. Clone o Repositório

```bash
git clone https://github.com/LucineiaSilvah/projeto-qrcode.git
cd projeto-qrcode
```

### 2. Instale dependencias:
```bash
 npm i chalk
 npm i qrcode-terminal
 npm i prompt
```

### 3. Ajuste packege.json:
apos main

```bash

   "type": "module",
  "scripts": {
    "start": "node --env-file=.env src/index.js"
  },

```
### 4. rode a apicação:
```bash
npm run start

```