# Dragon Token - An ERC20 token

Dragon Token deployed on Rinkeby testnet

## Features

- Fetch Name of Token
- Fetch Symbol of Token
- Send 1000 tokens to given address
- Show alert message on successful transaction

## Installation

Clone this repository

```bash
  git clone https://github.com/agrawalia/Dragon-Token.git
  cd dragon-token
```

Install all dependencies

```bash
    npm install
```

Compile contracts

```bash
    npx hardhat compile
```

Deploy on Rinkeby testnet

```bash
    npx hardhat run scripts/01-deploy-dragon.js --network rinkeby
```

Interact with smart contract

```bash
    Open index.html in any browser
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`INFURA_URL`

`PRIVATE_KEY`
