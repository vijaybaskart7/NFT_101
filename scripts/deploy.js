const { ethers } = require("hardhat");

async function main() {
  const SuperMarioWorld = await ethers.getContractFactory("SuperMarioWorldERC1155");
  const superMarioWorld = await SuperMarioWorld.deploy("SuperMarioWorldERC1155", "SMWDERC1155");

  await superMarioWorld.deployed();
  console.log('superMario depoyed', superMarioWorld.address);
  await superMarioWorld.mint(20, "https://ipfs.io/ipfs/QmNoanNDrKZ9NyBL5HtDipYsn821PS5Z3XYuV9iTuuxVVi");
  console.log('NFT minted Successfully');
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("error", error);
    process.exit(1);
  });
