#!/usr/bin/env bash

# Deploy contracts
truffle migrate --reset --network rinkeby

# Verify Contracts on Etherscan
truffle run verify CipherToken --network rinkeby --license SPDX-License-Identifier
truffle run verify xCipherToken --network rinkeby --license SPDX-License-Identifier
#truffle run verify SushiToken --network rinkeby --license SPDX-License-Identifier
truffle run verify MasterChef --network rinkeby --license SPDX-License-Identifier
#truffle run verify MasterKey --network rinkeby --license SPDX-License-Identifier

# Flatten Contracts
#./node_modules/.bin/truffle-flattener contracts/SushiToken.sol > flats/SushiToken_flat.sol
./node_modules/.bin/truffle-flattener contracts/MasterChef.sol > flats/MasterChef_flat.sol
./node_modules/.bin/truffle-flattener contracts/CipherToken.sol > flats/CipherToken_flat.sol
./node_modules/.bin/truffle-flattener contracts/xCipherToken.sol > flats/xCipherToken_flat.sol
#./node_modules/.bin/truffle-flattener contracts/MasterKey.sol > flats/MasterKey_flat.sol
