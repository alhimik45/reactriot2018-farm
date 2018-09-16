import { connect } from 'react-redux'
import LineIndicator from './components/RightPanel/LineIndicator'
import electro from './img/electro.svg'
import fire from './img/fire.svg'
import dollar from './img/dollar.svg'
import bitcoin from './img/bitcoin.svg'
import dash from './img/dash.svg'
import eth from './img/ethereum.svg'
import litecoin from './img/litecoin.svg'
import pick from './img/pick.svg'
import NumericValue from './components/RightPanel/NumericValue'
import Board from './components/Board/Board'
import Shop from './components/Shop'
import Welcome from './components/Welcome'
import { calcHashs } from './functions'
import Trading from './components/Trading'
import CurrentScore from "./components/CurrentScore";

export const ElectroLine = connect(({ game: { electricity } }) => ({
  percents: electricity,
  icon: electro
}), null)(LineIndicator)

export const HeatLine = connect(({ game: { heatCurrent, heatMax } }) => ({
  percents: heatCurrent / heatMax * 100,
  icon: fire
}), null)(LineIndicator)

export const DollarsValue = connect(({ game: { currencies } }) => ({
  value: currencies.$,
  icon: dollar
}), null)(NumericValue)

export const BitcoinValue = connect(({ game: { currencies } }) => ({
  value: currencies.BTC,
  icon: bitcoin
}), null)(NumericValue)

export const LitecoinValue = connect(({ game: { currencies } }) => ({
  value: currencies.LTC,
  icon: litecoin
}), null)(NumericValue)

export const EthValue = connect(({ game: { currencies } }) => ({
  value: currencies.ETH,
  icon: eth
}), null)(NumericValue)

export const DashValue = connect(({ game: { currencies } }) => ({
  value: currencies.DASH,
  icon: dash
}), null)(NumericValue)

export const CurrentScoreConnected = connect(({game: {currencies, coinType}}) => ({

}), null)(CurrentScore);

export const MegahashValue = connect(({ game }) => ({
  value: calcHashs(game),
  icon: pick
}), null)(NumericValue)

export const BoardConnected = connect(({ game: { currentItemToBuy, grid, sellActive } }) => ({
  grid,
  sellActive,
  itemToBuy: currentItemToBuy,
}), ({ game: { buyItem, switchCurrency, sellItem, forcedSetItem } }) => ({
  switchCurrency,
  placeItem: buyItem,
  sell: sellItem,
  forcedSetItem: forcedSetItem,
}))(Board)

export const ShopConnected = connect(({ game: { sellActive } }) => ({
  sellActive,
}), ({ game: { startBuyItem, toggleSell } }) => ({
  toggleSell,
  buy: startBuyItem,
}))(Shop)

export const WelcomeConnected = connect(null, ({ game: { startGame } }) => ({
  startGame: startGame
}))(Welcome)

export const TradingConnected = connect(null, ({ game: { buyCurrency, sellCurrency } }) => ({
  buy: buyCurrency,
  sell: sellCurrency
}))(Trading)
