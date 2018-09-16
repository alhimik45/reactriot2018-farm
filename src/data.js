import nvidiaGtx from './img/nvidiaGtx.svg'
import nvidiaGtx2 from './img/nvidiaGtx-2.svg'
import nvidiaTitan from './img/nvidiaTitan.svg'
import radeonLow from './img/radeonLow.svg'
import radeonLow2 from './img/radeonLow-2.svg'
import radeonHigh from './img/radeonHigh.svg'
import radeonHigh2 from './img/radeonHigh-2.svg'
import server from './img/server.svg'
import server2 from './img/server-2.svg'
import fan from './img/fan.svg'
import fan2 from './img/fan-2.svg'
import asicDash from './img/asic-dash.svg'
import asicDash2 from './img/asic-dash-2.svg'
import asicBitcoin from './img/asic-btc.svg'
import asicBitcoin2 from './img/asic-btc-2.svg'
import asicLitecoin from './img/asic-ltc.svg'
import asicLitecoin2 from './img/asic-ltc-2.svg'
import asicEth from './img/asic-eth.svg'
import asicEth2 from './img/asic-eth-2.svg'
import cooler from './img/cooler.svg'
import cooler2 from './img/cooler-2.svg'
import bitcoin from './img/bitcoin.svg';
import dash from './img/dash.svg';
import ethereum from './img/ethereum.svg';
import litecoin from './img/litecoin.svg';
import React from 'react'

export const Tech = {
  universal: {
    nvidiaGtx: {
      name: "NVIDIA GTX",
      cost: 1500,
      img: [nvidiaGtx, nvidiaGtx2],
      hashes: 30,
      mine: "BTC",
      heatChange: 27,
      overlay: <div className="my-tooltip">
        <b>Cost: </b>
        $1500<br/>
        <b>MH/s: </b>
        30<br/>
        <b>Heats Up: </b>
        27°C<br/>
      </div>
    },
    nvidiaTitan: {
      name: "NVIDIA Titan",
      cost: 3000,
      img: [nvidiaTitan],
      hashes: 50,
      mine: "BTC",
      heatChange: 50,
      overlay: <div className="my-tooltip">
        <b>Cost: </b>
        $3000<br/>
        <b>MH/s: </b>
        50<br/>
        <b>Heats Up: </b>
        50°C<br/>
      </div>
    },
    radeon1: {
      name: "AMD RX",
      cost: 500,
      img: [radeonLow, radeonLow2],
      hashes: 11,
      mine: "BTC",
      heatChange: 25,
      overlay: <div className="my-tooltip">
        <b>Cost: </b>
        $500<br/>
        <b>MH/s: </b>
        11<br/>
        <b>Heats Up: </b>
        25°C<br/>
      </div>
    },
    radeon: {
      name: "Radeon RX",
      cost: 1000,
      img: [radeonHigh, radeonHigh2],
      hashes: 22,
      mine: "BTC",
      heatChange: 30,
      overlay: <div className="my-tooltip">
        <b>Cost: </b>
        $1000<br/>
        <b>MH/s: </b>
        22<br/>
        <b>Heats Up: </b>
        30°C<br/>
      </div>
    },
    cloudServer: {
      name: "Mining Cluster",
      cost: 20000,
      img: [server, server2],
      hashes: 200,
      mine: "BTC",
      heatChange: 90,
      overlay: <div className="my-tooltip">
        <b>Cost: </b>
        $20000<br/>
        <b>MH/s: </b>
        200<br/>
        <b>Heats Up: </b>
        90°C<br/>
      </div>
    }
  },
  asic: {
    dash: {
      name: "Dash ASIC",
      cost: 5000,
      img: [asicDash, asicDash2],
      hashes: 80,
      mine: "DASH",
      heatChange: 35,
      overlay: <div className="my-tooltip">
        <b>Cost: </b>
        $5000<br/>
        <b>MH/s: </b>
        80<br/>
        <b>Heats Up: </b>
        35°C<br/>
      </div>
    },
    bitcoin: {
      name: "Bitcoin ASIC",
      cost: 5000,
      img: [asicBitcoin, asicBitcoin2],
      hashes: 80,
      mine: "BTC",
      heatChange: 35,
      overlay: <div className="my-tooltip">
        <b>Cost: </b>
        $5000<br/>
        <b>MH/s: </b>
        80<br/>
        <b>Heats Up: </b>
        35°C<br/>
      </div>
    },
    litecoin: {
      name: "Litecoin ASIC",
      cost: 5000,
      img: [asicLitecoin, asicLitecoin2],
      hashes: 80,
      mine: "LTC",
      heatChange: 35,
      overlay: <div className="my-tooltip">
        <b>Cost: </b>
        $5000<br/>
        <b>MH/s: </b>
        80<br/>
        <b>Heats Up: </b>
        35°C<br/>
      </div>
    },
    eth: {
      name: "Etherium ASIC",
      cost: 5000,
      img: [asicEth, asicEth2],
      hashes: 80,
      mine: "ETH",
      heatChange: 35,
      overlay: <div className="my-tooltip">
        <b>Cost: </b>
        $5000<br/>
        <b>MH/s: </b>
        80<br/>
        <b>Heats Up: </b>
        35°C<br/>
      </div>
    }
  },
  fan: {
    common: {
      name: "Cooler",
      cost: 100,
      img: [fan, fan2],
      heatChange: -30,
      overlay: <div className="my-tooltip">
        <b>Cost: </b>
        $100<br/>
        <b>Heats Down: </b>
        -30°C<br/>
      </div>
    },
    industrial: {
      name: "Upgraded cooler",
      cost: 500,
      img: [cooler, cooler2],
      heatChange: -60,
      overlay: <div className="my-tooltip">
        <b>Cost: </b>
        $500<br/>
        <b>Heats Down: </b>
        -60°C<br/>
      </div>
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
  .filter(key => key !== 'coin')
  .flatMap(type =>
    Object.keys(Tech[type])
      .map(variant => ({
        ...Tech[type][variant],
        type,
        variant
      })))
