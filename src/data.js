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
import cooler from './img/cooler.svg'

export const Tech = {
  universal: {
    nvidiaGtx: {
      name: "Nvidia GTX",
      cost: 1500,
      img: nvidiaGtx,
      hashes: 100,
      mine: "BTC",
      heatChange: 10
    },
    nvidiaTitan: {
      name: "Nvidia Titan",
      cost: 4500,
      img: nvidiaTitan,
      hashes: 100,
      mine: "BTC",
      heatChange: 10
    },
    radeon1: {
      name: "AMD RX 560",
      cost: 2800,
      img: radeonLow,
      hashes: 100,
      mine: "BTC",
      heatChange: 10
    },
    radeon: {
      name: "Radeon RX 470",
      cost: 3500,
      img: radeonHigh,
      hashes: 100,
      mine: "BTC",
      heatChange: 10
    },
    cloudServer: {
      name: "Cloud miner",
      cost: 5000,
      img: server,
      hashes: 100,
      mine: "BTC",
      heatChange: 100
    }
  },
  asic: {
    dash: {
      name: "Dash ASIC",
      cost: 2000,
      img: asicDash,
      hashes: 100,
      mine: "DASH",
      heatChange: 10
    },
    bitcoin: {
      name: "Bitcoin ASIC",
      cost: 2000,
      img: asicBitcoin,
      hashes: 100,
      mine: "BTC",
      heatChange: 10
    },
    litecoin: {
      name: "Litecoin ASIC",
      cost: 2000,
      img: asicLitecoin,
      hashes: 100,
      mine: "LTC",
      heatChange: 10
    },
    eth: {
      name: "Etherium ASIC",
      cost: 2000,
      img: asicEth,
      hashes: 100,
      mine: "ETH",
      heatChange: 10
    }
  },
  fan: {
    common: {
      name: "Cooler",
      cost: 100,
      img: fan,
      heatChange: -50
    },
    industrial: {
      name: "Industrial cooler",
      cost: 500,
      img: cooler,
      heatChange: -300
    }
  }
}

export const ShopItems = Object.keys(Tech)
  .flatMap(type =>
    Object.keys(Tech[type])
      .map(variant => ({
        ...Tech[type][variant],
        type,
        variant
      })))
