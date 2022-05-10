const hre = require("hardhat");

async function main() {
  const Dragon = await hre.ethers.getContractFactory("DragonToken");
  const dragon = await Dragon.deploy();
  await dragon.deployed();

  console.log("Token deployed to:", dragon.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });