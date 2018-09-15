import nvidia from './img/gpunvidia.png'
import radeon from './img/gpuradeon.png'
import cpu from './img/cpu.png'
import btcAsic from './img/asic2.png'
import fan from './img/fan.png'

export const Tech = {
  universal: {
    nvidia: {
      name: "NVidia GPU",
      cost: 1500,
      img: nvidia
    },
    radeon: {
      name: "Radeon GPU",
      cost: 3500,
      img: radeon
    },
    cpu: {
      name: "Intel CPU",
      cost: 200,
      img: cpu
    }
  },
  asic: {
    BTC: {
      name: "Bitcoin ASIC",
      cost: 2000,
      img: btcAsic
    }
  },
  fan: {
    common: {
      name: "Cooler",
      cost: 100,
      img: fan
    }
  }
}

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
