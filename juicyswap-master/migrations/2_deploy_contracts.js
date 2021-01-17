const CipherToken = artifacts.require('CipherToken.sol')
const xCipherToken = artifacts.require('xCipherToken.sol')
const MasterChef = artifacts.require('MasterChef.sol')

//const GovernerAlpha = artifacts.require('GovernerAlpha.sol')

module.exports = async function(deployer) {
  // Deploy Sushi Token
  await deployer.deploy(CipherToken)
  const cipherToken = await CipherToken.deployed()
  //cipherToken.mint('0xa0df350d2637096571F7A701CBc1C5fdE30dF76A', 10000000000)

  await deployer.deploy(xCipherToken, cipherToken.address)
  const xcipherToken = await xCipherToken.deployed()
  //xcipherToken.mint('0xa0df350d2637096571F7A701CBc1C5fdE30dF76A', 10000000000)

  // await deployer.deploy(
  //   GovernerAlpha,
  //   'timelock',
  //   cipherToken.address,
  //   'guardian address here'
  // )

  // Deploy Masterchef Contract
  await deployer.deploy(
    MasterChef,
    cipherToken.address,
    process.env.DEV_ADDRESS, // Your address where you get sushi tokens - should be a multisig
    web3.utils.toWei(process.env.TOKENS_PER_BLOCK), // Number of tokens rewarded per block, e.g., 100
    process.env.START_BLOCK, // Block number when token mining starts
    process.env.BONUS_END_BLOCK // Block when bonus ends
  )

  // Make Masterchef contract token owner
  const masterChef = await MasterChef.deployed()
  await cipherToken.transferOwnership(masterChef.address)
  //await xcipherToken.transferOwnership(masterChef.address)

  // Add Liquidity pool for rewards, e.g., "ETH/DAI Pool"
  await masterChef.add(
    process.env.ALLOCATION_POINT,
    process.env.LP_TOKEN_ADDRESS,
    false
  )

  // Add more liquidity pools here upon deployment, or add them later manually
  // await masterChef.add(
  //   process.env.ALLOCATION_POINT,
  //   '', // lp token address for each pool you want to add
  //   true
  // )




}
