import nvidiaGtx from './img/nvidiaGtx.svg'
import nvidiaTitan from './img/nvidiaTitan.svg'
import radeonLow from './img/radeonLow.svg'
import radeonHigh from './img/radeonHigh.svg'
import server from './img/server.svg'
import fan from './img/fan.svg'
import asicDash from './img/asic-dash.svg'
import asicBitcoin from './img/asic-btc.svg'
import asicLitecoin from './img/asic-ltc.svg'
import asicEth from './img/asic-eth.svg'
import bitcoin from './img/bitcoin.svg';
import dash from './img/dash.svg';
import ethereum from './img/ethereum.svg';
import litecoin from './img/litecoin.svg';

export const Tech = {
  universal: {
    nvidiaGtx: {
      name: "Nvidia GTX",
      cost: 1500,
      img: nvidiaGtx
    },
    nvidiaTitan: {
      name: "Nvidia Titan",
      cost: 4500,
      img: nvidiaTitan
    },
    radeon1: {
      name: "AMD RX 560",
      cost: 2800,
      img: radeonLow
    },
    radeon: {
      name: "Radeon RX 470",
      cost: 3500,
      img: radeonHigh
    },
    cloudServer: {
      name: "Cloud miner",
      cost: 5000,
      img: server
    }
  },
  asic: {
    dash: {
      name: "Dash ASIC",
      cost: 2000,
      img: asicDash
    },
    bitcoin: {
      name: "Bitcoin ASIC",
      cost: 2000,
      img: asicBitcoin
    },
    litecoin: {
      name: "Litecoin ASIC",
      cost: 2000,
      img: asicLitecoin
    },
    eth: {
      name: "Etherium ASIC",
      cost: 2000,
      img: asicEth
    }
  },
  fan: {
    common: {
      name: "Cooler",
      cost: 100,
      img: fan
    }
  },
  coin: {
    bitcoin: {
      cost: 0,
      img: bitcoin,
      name: 'Bitcoin'
    },
    dash: {
      name: 'Dash',
      cost: 0,
      img: dash,
    },
    ethereum: {
      cost: 0,
      img: ethereum,
      name: 'Ethereum'
    },
    litecoin: {
      cost: 0,
      img: litecoin,
      name: 'Litecoin'
    }
  }
};

export const ShopItems = Object.keys(Tech)
    .flatMap(type =>
        Object.keys(Tech[type])
            .map(variant => ({
                type,
                variant,
                name: Tech[type][variant].name,
                cost: Tech[type][variant].cost,
                img: Tech[type][variant].img
            })))
