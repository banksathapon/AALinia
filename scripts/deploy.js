async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());


  const NovusysAccount = await ethers.getContractFactory("NovusysAccount");
  const novusysAccount = await NovusysAccount.deploy("0x0576a174D229E3cFA37253523E645A78A0C91B57");

  await novusysAccount.deployed();

  console.log("Token address:", novusysAccount.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });