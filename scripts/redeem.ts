import { ethers } from "hardhat";

const b_address = "0x17e46765bfcD411f13192AF6602EC7dCE95E1385";
const itemId = 0;
const deployer = "0x4fE333470b78C5896178780aa9483bc8F6085418";

export async function rateOwnerChange() {
  console.log(`Rate at ${b_address}`);

  const _contract = await ethers.getContractAt("aval_20", b_address);

  const balanceBefore = await _contract.getBalance(deployer, {
    from: deployer,
  });

  console.log("Balance: before redeem " + balanceBefore);

  console.log(`prev owner = ${await _contract.owner()}`);

  const transferTx = await _contract.red(itemId, {
    from: deployer,
  });

  const balanceAfter = await _contract.redeemToken(itemId, {
    from: deployer,
  });

  console.log("Balance: after redeem " + balanceAfter);
}

rateOwnerChange()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
