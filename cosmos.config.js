const COSMOS_CONFIG = [
  {
    chainId: 'cosmoshub-4',
    name: 'Cosmoshub',
    apiURL: 'https://lcd-cosmos.cosmostation.io',
    rpcURL: 'https://cosmoshub.validator.network',
    coinLookup: {
      viewDenom: 'ATOM',
      chainDenom: 'uatom',
      addressPrefix: 'cosmos',
      icon: `https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/atom.svg`,
    },
    coingeckoId: 'cosmos',
    explorer: 'https://www.mintscan.io/cosmos/account/'
  },
  {
    chainId: 'akashnet-2',
    name: 'Akash',
    apiURL: 'https://lcd-akash.cosmostation.io',
    rpcURL: 'http://162.55.94.246:28957',
    coinLookup: {
      viewDenom: 'AKT',
      chainDenom: 'uakt',
      addressPrefix: 'akash',
      icon: `https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/akt.svg`,
    },
    coingeckoId: 'akash-network',
    explorer: 'https://www.mintscan.io/akash/account/'
  },
  {
    chainId: 'bitcanna-1',
    name: 'BitCanna',
    apiURL: 'https://lcd.bitcanna.io',
    rpcURL: 'https://rpc.bitcanna.io',
    coinLookup: {
      viewDenom: 'BCNA',
      chainDenom: 'ubcna',
      addressPrefix: 'bcna',
      icon: `https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/bcna.svg`,
    },
    coingeckoId: 'bitcanna',
    explorer: 'https://www.mintscan.io/bitcanna/account/'
  },
  {
    chainId: 'osmosis-1',
    name: 'Osmosis',
    apiURL: 'https://lcd-osmosis.blockapsis.com',
    rpcURL: 'https://rpc-osmosis.keplr.app',
    coinLookup: {
      viewDenom: 'OSMO',
      chainDenom: 'uosmo',
      addressPrefix: 'osmo',
      icon: `https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/osmo.svg`,
    },
    coingeckoId: 'osmosis',
    explorer: 'https://www.mintscan.io/osmosis/account/'
  },
  {
    chainId: 'microtick-1',
    name: 'Microtick',
    apiURL: 'https://lcd-microtick.keplr.app',
    rpcURL: 'https://rpc-microtick.keplr.app',
    coinLookup: {
      viewDenom: 'TICK',
      chainDenom: 'utick',
      addressPrefix: 'micro',
      icon: `https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/tick.svg`,
    },
    coingeckoId: 'microtick',
    explorer: 'https://explorer.microtick.zone/accounts/'
  },
  {
    chainId: 'iov-mainnet-ibc',
    name: 'Starname',
    apiURL: 'https://lcd-iov.keplr.app',
    rpcURL: 'https://rpc-iov.keplr.app',
    coinLookup: {
      viewDenom: 'IOV',
      chainDenom: 'uiov',
      addressPrefix: 'star',
      icon: `https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/iov.svg`,
    },
    coingeckoId: 'starname',
    explorer: 'https://www.mintscan.io/starname/account/'
  },
  {
    chainId: 'chihuahua-1',
    name: 'Chihuahua',
    apiURL: 'https://api.chihuahua.wtf',
    rpcURL: 'https://rpc.chihuahua.wtf',
    coinLookup: {
      viewDenom: 'HUAHUA',
      chainDenom: 'uhuahua',
      addressPrefix: 'chihuahua',
      icon: `https://avatars.githubusercontent.com/u/94940349?v=4`,
    },
    coingeckoId: 'chihuahua-token',
    explorer: 'https://www.mintscan.io/chihuahua/account/'
  },
  {
    chainId: 'stargaze-1',
    name: 'Stargaze',
    apiURL: 'https://rest.stargaze-apis.com',
    rpcURL: 'https://rpc.stargaze-apis.com',
    coinLookup: {
      viewDenom: 'STARS',
      chainDenom: 'ustars',
      addressPrefix: 'stars',
      icon: `https://raw.githubusercontent.com/public-awesome/assets/main/images/stars.png`,
    },
    coingeckoId: 'stargaze',
    explorer: 'https://www.mintscan.io/stargaze/account/'
  },
  {
    chainId: 'bitsong-2b',
    name: 'BitSong',
    apiURL: 'https://lcd-bitsong.itastakers.com',
    rpcURL: 'https://rpc-bitsong.itastakers.com',
    coinLookup: {
      viewDenom: 'BTSG',
      chainDenom: 'ubtsg',
      addressPrefix: 'bitsong',
      icon: `https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/btsg.svg`,
    },
    coingeckoId: 'bitsong',
    explorer: 'https://www.mintscan.io/bitsong/account/'
  },
  {
    chainId: 'juno-1',
    name: 'Juno',
    apiURL: 'https://lcd-juno.itastakers.com',
    rpcURL: 'https://rpc-juno.itastakers.com',
    coinLookup: {
      viewDenom: 'JUNO',
      chainDenom: 'ujuno',
      addressPrefix: 'juno',
      icon: `https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/juno.svg`,
    },
    coingeckoId: 'juno-network',
    explorer: 'https://www.mintscan.io/juno/account/'
  },
  {
    chainId: 'comdex-1',
    name: 'Comdex',
    apiURL: 'https://rest.comdex.one',
    rpcURL: 'https://rpc.comdex.one',
    coinLookup: {
      viewDenom: 'CMDX',
      chainDenom: 'ucmdx',
      addressPrefix: 'comdex',
      icon: `https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/cmdx.png`,
    },
    coingeckoId: 'comdex',
    explorer: 'https://www.mintscan.io/comdex/account/'
  },
  {
    chainId: 'sentinelhub-2',
    name: 'Sentinel',
    apiURL: 'https://lcd-sentinel.keplr.app',
    rpcURL: 'https://rpc-sentinel.keplr.app',
    coinLookup: {
      viewDenom: 'DVPN',
      chainDenom: 'udvpn',
      addressPrefix: 'sent',
      icon: `https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/dvpn.png`,
    },
    coingeckoId: 'sentinel',
    explorer: 'https://www.mintscan.io/sentinel/account/'
  },
  {
    chainId: 'sifchain-1',
    name: 'Sifchain',
    apiURL: 'https://api.sifchain.finance',
    rpcURL: 'http://rpc-archive.sifchain.finance',
    coinLookup: {
      viewDenom: 'rowan',
      chainDenom: 'urowan',
      addressPrefix: 'sif',
      icon: `https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/dvpn.png`,
    },
    coingeckoId: 'sifchain',
    explorer: 'https://www.mintscan.io/sifchain/account/'
  },
];
