const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Chris Pine", "Chris Hemsworth", "Chris Evans", "Chris Pratt"],       // Names
    ["QmeXy4KrPMdzy6v7EkehPHdsEjA5U9oP4YZFYySNtS7ned", // Images
    "QmRMWxBCEMBPxwVjsTmbzAPbEYFi9gnXvN4KWyFu9E7zGR",
    "QmbVYnLpnyz5Rpk1hD6F4zvjXMPNNvkMCG8aaoA4fSjmaK",
    "QmNnpNHP8DfWCbU7Sen3KBvPzW99UAidzAMsQeuZhGmtbt"],
    [300, 500, 400, 200],                    // HP values
    [50, 25, 75, 100],                      // Attack damage values
    "Michael Myers", // Boss name
    "QmXvCRH3kdJuS1QVrFDjP1UXC7UvmtjHHkABYf2YufHhwr", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
