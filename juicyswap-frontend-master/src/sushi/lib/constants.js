import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

// Mainnet Addresses
export const addressMap = {
  uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  UNIAmpl: '0xc5be99A02C6857f9Eac67BbCE58DF5572498F40c',
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  UNIRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  MKR: '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2',
  SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  SUSHIYCRV: '0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726',
}

// export const contractAddresses = {
//   sushi: {
//     1: '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
//   },
//   masterChef: {
//     1: '0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd',
//   },
//   weth: {
//     1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
//   },
//   xSushi: {
//     1: '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272'
//   }
// }


/*
SLP Address on mainnet for reference
==========================================
0  USDT 0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852
1  USDC 0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc
2  DAI  0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11
3  sUSD 0xf80758aB42C3B07dA84053Fd88804bCB6BAA4b5c
4  COMP 0xCFfDdeD873554F362Ac02f8Fb1f02E5ada10516f
5  LEND 0xaB3F9bF1D81ddb224a2014e98B238638824bCf20
6  SNX  0x43AE24960e5534731Fc831386c07755A2dc33D47
7  UMA  0x88D97d199b9ED37C29D846d00D443De980832a22
8  LINK 0xa2107FA5B38d9bbd2C461D6EDf11B11A50F6b974
9  BAND 0xf421c3f2e695C2D4C0765379cCace8adE4a480D9
10 AMPL 0xc5be99A02C6857f9Eac67BbCE58DF5572498F40c
11 YFI  0x2fDbAdf3C4D5A8666Bc06645B8358ab803996E28
12 SUSHI 0xCE84867c3c02B05dc570d0135103d3fB9CC19433
*/

// export const supportedPools = [
//   {
//     pid: 12,
//     lpAddresses: {
//       1: '0x795065dCc9f64b5614C407a6EFDC400DA6221FB0',
//     },
//     tokenAddresses: {
//       1: '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
//     },
//     name: 'Sushi Party!',
//     symbol: 'SUSHI-ETH SLP',
//     tokenSymbol: 'SUSHI',
//     icon: '🍣',
//   },
//   {
//     pid: 18,
//     lpAddresses: {
//       1: '0xDafd66636E2561b0284EDdE37e42d192F2844D40', //change this
//     },
//     tokenAddresses: {
//       1: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
//     },
//     name: 'UNI Unicorn',
//     symbol: 'UNI-ETH SLP',
//     tokenSymbol: 'UNI',
//     icon: '🦄',
//   },
//   {
//     pid: 0,
//     lpAddresses: {
//       1: '0x06da0fd433C1A5d7a4faa01111c044910A184553',
//     },
//     tokenAddresses: {
//       1: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
//     },
//     name: 'Tether Turtle',
//     symbol: 'USDT-ETH SLP',
//     tokenSymbol: 'USDT',
//     icon: '🐢',
//   },
//   {
//     pid: 1,
//     lpAddresses: {
//       1: '0x397FF1542f962076d0BFE58eA045FfA2d347ACa0',
//     },
//     tokenAddresses: {
//       1: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
//     },
//     name: 'Circle Snail',
//     symbol: 'USDC-ETH SLP',
//     tokenSymbol: 'USDC',
//     icon: '🐌',
//   },
//   {
//     pid: 2,
//     lpAddresses: {
//       1: '0xC3D03e4F041Fd4cD388c549Ee2A29a9E5075882f',
//     },
//     tokenAddresses: {
//       1: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
//     },
//     name: 'Donald DAI',
//     symbol: 'DAI-ETH SLP',
//     tokenSymbol: 'DAI',
//     icon: '🦆',
//   },
//   {
//     pid: 3,
//     lpAddresses: {
//       1: '0xF1F85b2C54a2bD284B1cf4141D64fD171Bd85539',
//     },
//     tokenAddresses: {
//       1: '0x57Ab1ec28D129707052df4dF418D58a2D46d5f51',
//     },
//     name: 'Spartan Dollar',
//     symbol: 'SUSD-ETH SLP',
//     tokenSymbol: 'SUSD',
//     icon: '🦍',
//   },
//   {
//     pid: 7,
//     lpAddresses: {
//       1: '0x001b6450083E531A5a7Bf310BD2c1Af4247E23D4',
//     },
//     tokenAddresses: {
//       1: '0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828',
//     },
//     name: 'Umami Squid',
//     symbol: 'UMA-ETH SLP',
//     tokenSymbol: 'UMA',
//     icon: '🦑',
//   },
//   {
//     pid: 9,
//     lpAddresses: {
//       1: '0xA75F7c2F025f470355515482BdE9EFA8153536A8',
//     },
//     tokenAddresses: {
//       1: '0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55',
//     },
//     name: 'Band-osaurus',
//     symbol: 'BAND-ETH SLP',
//     tokenSymbol: 'BAND',
//     icon: '🦖',
//   },
//   {
//     pid: 8,
//     lpAddresses: {
//       1: '0xC40D16476380e4037e6b1A2594cAF6a6cc8Da967',
//     },
//     tokenAddresses: {
//       1: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
//     },
//     name: 'Toadie Marine',
//     symbol: 'LINK-ETH SLP',
//     tokenSymbol: 'LINK',
//     icon: '🐸',
//   },
//   {
//     pid: 10,
//     lpAddresses: {
//       1: '0xCb2286d9471cc185281c4f763d34A962ED212962',
//     },
//     tokenAddresses: {
//       1: '0xD46bA6D942050d489DBd938a2C909A5d5039A161',
//     },
//     name: 'Ample Chicks',
//     symbol: 'AMPL-ETH SLP',
//     tokenSymbol: 'AMPL',
//     icon: '🐥',
//   },
//   {
//     pid: 4,
//     lpAddresses: {
//       1: '0x31503dcb60119A812feE820bb7042752019F2355',
//     },
//     tokenAddresses: {
//       1: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
//     },
//     name: 'Compound Truffle',
//     symbol: 'COMP-ETH SLP',
//     tokenSymbol: 'COMP',
//     icon: '🍄',
//   },
//   {
//     pid: 5,
//     lpAddresses: {
//       1: '0x5E63360E891BD60C69445970256C260b0A6A54c6',
//     },
//     tokenAddresses: {
//       1: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
//     },
//     name: 'Aave Boar',
//     symbol: 'LEND-ETH SLP',
//     tokenSymbol: 'LEND',
//     icon: '🐗',
//   },
//   {
//     pid: 6,
//     lpAddresses: {
//       1: '0xA1d7b2d891e3A1f9ef4bBC5be20630C2FEB1c470',
//     },
//     tokenAddresses: {
//       1: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
//     },
//     name: 'Synthetic Snake',
//     symbol: 'SNX-ETH SLP',
//     tokenSymbol: 'SNX',
//     icon: '🐍',
//   },
//   {
//     pid: 11,
//     lpAddresses: {
//       1: '0x088ee5007C98a9677165D78dD2109AE4a3D04d0C',
//     },
//     tokenAddresses: {
//       1: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
//     },
//     name: 'YFI Whale',
//     symbol: 'YFI-ETH SLP',
//     tokenSymbol: 'YFI',
//     icon: '🐋',
//   },
//   {
//     pid: 13,
//     lpAddresses: {
//       1: '0x611CDe65deA90918c0078ac0400A72B0D25B9bb1',
//     },
//     tokenAddresses: {
//       1: '0x408e41876cCCDC0F92210600ef50372656052a38',
//     },
//     name: 'REN Rhino',
//     symbol: 'REN-ETH SLP',
//     tokenSymbol: 'REN',
//     icon: '🦏',
//   },
//   {
//     pid: 14,
//     lpAddresses: {
//       1: '0xaAD22f5543FCDaA694B68f94Be177B561836AE57',
//     },
//     tokenAddresses: {
//       1: '0x68A118Ef45063051Eac49c7e647CE5Ace48a68a5',
//     },
//     name: 'BASED Bull',
//     symbol: 'BASED-sUSD SLP',
//     tokenSymbol: 'BASED',
//     icon: '🐂',
//   },
//   {
//     pid: 15,
//     lpAddresses: {
//       1: '0x117d4288B3635021a3D612FE05a3Cbf5C717fEf2',
//     },
//     tokenAddresses: {
//       1: '0x476c5E26a75bd202a9683ffD34359C0CC15be0fF',
//     },
//     name: 'SRM Shark',
//     symbol: 'SRM-ETH SLP',
//     tokenSymbol: 'SRM',
//     icon: '🦈',
//   },
//   {
//     pid: 16,
//     lpAddresses: {
//       1: '0x95b54C8Da12BB23F7A5F6E26C38D04aCC6F81820',
//     },
//     tokenAddresses: {
//       1: '0xAba8cAc6866B83Ae4eec97DD07ED254282f6aD8A',
//     },
//     name: 'YAMv2',
//     symbol: 'YAMv2-ETH SLP',
//     tokenSymbol: 'YAMv2',
//     icon: '🍠',
//   },
//   {
//     pid: 17,
//     lpAddresses: {
//       1: '0x58Dc5a51fE44589BEb22E8CE67720B5BC5378009',
//     },
//     tokenAddresses: {
//       1: '0xD533a949740bb3306d119CC777fa900bA034cd52',
//     },
//     name: 'CRV Crocodile',
//     symbol: 'CRV-ETH SLP',
//     tokenSymbol: 'CRV',
//     icon: '🐊',
//   },
//   {
//     pid: 19,
//     lpAddresses: {
//       1: '0x36e2FCCCc59e5747Ff63a03ea2e5C0c2C14911e7',
//     },
//     tokenAddresses: {
//       1: '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272',
//     },
//     name: "Chef's Menu",
//     symbol: 'xSUSHI-ETH SLP',
//     tokenSymbol: 'xSUSHI',
//     icon: '👨🏻‍🍳',
//   },
//   {
//    pid: 20,
//    lpAddresses: {
//      1: '0x0Cfe7968e7c34A51217a7C9b9dc1690F416E027e',
//    },
//    tokenAddresses: {
//      1: '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643',
//    },
//    name: "Chef's Menu",
//    symbol: 'cDAI-DAI SLP',
//    tokenSymbol: 'cDAI',
//    icon: '‍👨🏻‍🍳',
//  },
//  {
//    pid: 21,
//    lpAddresses: {
//      1: '0xCEfF51756c56CeFFCA006cD410B03FFC46dd3a58',
//    },
//    tokenAddresses: {
//      1: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
//    },
//    name: "Chef's Menu",
//    symbol: 'WBTC-ETH SLP',
//    tokenSymbol: 'WBTC',
//    icon: '👨🏻‍🍳',
//  },
//  {
//    pid: 22,
//    lpAddresses: {
//      1: '0xf169CeA51EB51774cF107c88309717ddA20be167',
//    },
//    tokenAddresses: {
//      1: '0x2ba592F78dB6436527729929AAf6c908497cB200',
//    },
//    name: "Chef's Menu",
//    symbol: 'CREAM-ETH SLP',
//    tokenSymbol: 'CREAM',
//    icon: '👨🏻‍🍳',
//  },
//  {
//    pid: 23,
//    lpAddresses: {
//      1: '0x17b3C19Bd640a59E832AB73eCcF716CB47419846',
//    },
//    tokenAddresses: {
//      1: '0xD5525D397898e5502075Ea5E830d8914f6F0affe',
//    },
//    name: "Chef's Menu",
//    symbol: 'MEME-ETH SLP',
//    tokenSymbol: 'MEME',
//    icon: '👨🏻‍🍳',
//  },
//  {
//    pid: 24,
//    lpAddresses: {
//      1: '0xFcff3b04C499A57778ae2CF05584ab24278A7FCb',
//    },
//    tokenAddresses: {
//      1: '0x0d438F3b5175Bebc262bF23753C1E53d03432bDE',
//    },
//    name: "Chef's Menu",
//    symbol: 'wNXM-ETH SLP',
//    tokenSymbol: 'wNXM',
//    icon: '👨🏻‍🍳',
//  },
//  {
//    pid: 25,
//    lpAddresses: {
//      1: '0x382c4a5147Fd4090F7BE3A9Ff398F95638F5D39E',
//    },
//    tokenAddresses: {
//      1: '0x5dbcF33D8c2E976c6b560249878e6F1491Bca25c',
//    },
//    name: "Chef's Menu",
//    symbol: 'yUSD-ETH SLP',
//    tokenSymbol: 'yUSD',
//    icon: '👨🏻‍🍳',
//  },
//  {
//    pid: 26,
//    lpAddresses: {
//      1: '0x2024324a99231509a3715172d4F4f4E751b38d4d',
//    },
//    tokenAddresses: {
//      1: '0x5dbcF33D8c2E976c6b560249878e6F1491Bca25c',
//    },
//    name: "Chef's Menu",
//    symbol: 'yUSD-WBTC SLP',
//    tokenSymbol: 'yUSD',
//    icon: '👨🏻‍🍳',
//  },
//  {
//    pid: 27,
//    lpAddresses: {
//      1: '0x0be88ac4b5C81700acF3a606a52a31C261a24A35',
//    },
//    tokenAddresses: {
//      1: '0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b',
//    },
//    name: "Chef's Menu",
//    symbol: 'CRO-ETH SLP',
//    tokenSymbol: 'CRO',
//    icon: '👨🏻‍🍳',
//  },
//  {
//    pid: 28,
//    lpAddresses: {
//      1: '0x518d6CE2D7A689A591Bf46433443C31615b206C5',
//    },
//    tokenAddresses: {
//      1: '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
//    },
//    name: "Chef's Menu",
//    symbol: 'renBTC-WBTC SLP',
//    tokenSymbol: 'renBTC',
//    icon: '👨🏻‍🍳',
//  },
// ]





// CIPHERSWAP SETTINGS

export const CHAIN_ID = 4

// export const contractAddresses = {
//   sushi: {
//     4: '0xB0fCB7a7b8c1f936254DB0AA48F27e724Be01e86',
//   },
//   masterChef: {
//     4: '0xf51CDD02817d24d3fBCA543F4af5064582580f0E',
//   },
//   weth: {
//     4: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
//   },
//   xSushi: {
//     4: '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272' // NOTE: Not in use
//   }
// }

export const contractAddresses = {
  cipher: {
    4: '0xB0fCB7a7b8c1f936254DB0AA48F27e724Be01e86',
  },
  masterKey: {
    4: '0xf51CDD02817d24d3fBCA543F4af5064582580f0E',
  },
  weth: {
    4: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
  },
  xSushi: {
    4: '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272' // NOTE: Not in use
  }
}



export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      4: '0x03E6c12eF405AC3F642B9184eDed8E1322de1a9e', // LP Token Address
    },
    tokenAddresses: {
      4: '0x5592EC0cfb4dbc12D3aB100b257153436a1f0FEa', // Token, i.e. "DAI"
    },
    name: 'Don\'t Dai',
    symbol: 'DAI-ETH LP',
    tokenSymbol: 'DAI',
    icon: '🐱‍👤',
  },
  {
    pid: 1,
    lpAddresses: {
      4: '0x5308a481B2b65F6086083D2268acb73AADC757E0', // LP Token Address
    },
    tokenAddresses: {
      4: '0xD9BA894E0097f8cC2BBc9D24D308b98e36dc6D02', // Token, i.e. "USDT"
    },
    name: 'Whales Only',
    symbol: 'USDT-ETH LP',
    tokenSymbol: 'USDT',
    icon: '🐋',
  },
  {
      pid: 2,
      lpAddresses: {
        4: '0x4E99615101cCBB83A462dC4DE2bc1362EF1365e5', //change this
      },
      tokenAddresses: {
        4: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
      },
      name: 'Unicorn At Play',
      symbol: 'UNI-ETH SLP',
      tokenSymbol: 'UNI',
      icon: '🦄',
    },
    {
      pid: 3,
      lpAddresses: {
        4: '0x0d1e5112B7Bf0595837f6e19A8233e8b918Ef3aA',
      },
      tokenAddresses: {
        4: '0x01BE23585060835E02B77ef475b0Cc51aA1e0709',
      },
      name: 'Link Marines',
      symbol: 'LINK-ETH LP',
      tokenSymbol: 'LINK',
      icon: '🐱‍🐉',
    },
    {
      pid: 4,
      lpAddresses: {
        4: '0x827d1b93c3efe53cae89e011229019d3f1d10856',
      },
      tokenAddresses: {
        4: '0xB0fCB7a7b8c1f936254DB0AA48F27e724Be01e86',
      },
      name: 'Grape Ape',
      symbol: 'CIPHER-ETH LP',
      tokenSymbol: 'CIPHER',
      icon: '🍇',
    }
]

// 0xB0fCB7a7b8c1f936254DB0AA48F27e724Be01e86