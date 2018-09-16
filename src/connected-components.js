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
import MiniCoin from './components/Board/MiniCoin'
import MinicoinGenerator from './components/Board/MinicoinGenerator'

export const HeatLine = connect(({ game: { heatCurrent, heatMax } }) => ({
  percents: heatCurrent / heatMax * 100,
  icon: fire
}), null)(LineIndicator)

export const DollarsValue = connect(({ game: { currencies } }) => ({
  value: currencies.$,
  icon: dollar
}), null)(NumericValue)

export const BitcoinValue = connect(({ game: { currencies, difficulties } }) => ({
  value: currencies.BTC,
  diff: difficulties.BTC,
  icon: bitcoin
}), null)(NumericValue)

export const LitecoinValue = connect(({ game: { currencies, difficulties } }) => ({
  value: currencies.LTC,
  diff: difficulties.LTC,
  icon: litecoin
}), null)(NumericValue)

export const EthValue = connect(({ game: { currencies, difficulties } }) => ({
  value: currencies.ETH,
  diff: difficulties.ETH,
  icon: eth
}), null)(NumericValue)

export const DashValue = connect(({ game: { currencies, difficulties } }) => ({
  value: currencies.DASH,
  diff: difficulties.DASH,
  icon: dash
}), null)(NumericValue)

export const MegahashValue = connect(({ game }) => ({
  value: calcHashs(game),
  icon: pick
}), null)(NumericValue)

export const BoardConnected = connect(({ game: { currentItemToBuy, grid, sellActive } }) => ({
  grid,
  sellActive,
  itemToBuy: currentItemToBuy,
}), ({ game: { buyItem, switchCurrency, sellItem, forcedSetItem, updateScore, upMessage,undoSelect } }) => ({
  switchCurrency,
  placeItem: buyItem,
  sell: sellItem,
  forcedSetItem,
  updateScore,
  upMessage,
  undoSelect,
}))(Board)

export const ShopConnected = connect(({ game: { sellActive, currentItemToBuy } }) => ({
  sellActive,
  currentItemToBuy,
}), ({ game: { startBuyItem, toggleSell, undoSelect } }) => ({
  toggleSell,
  undoSelect,
  buy: startBuyItem,
}))(Shop)

export const WelcomeConnected = connect(null, ({ game: { startGame } }) => ({
  startGame: startGame
}))(Welcome)

export const TradingConnected = connect(null, ({ game: { buyCurrency, sellCurrency } }) => ({
  buy: buyCurrency,
  sell: sellCurrency
}))(Trading)

export const MiniCoinConnected = connect(null, ({ game: { increaseCurrency } }) => ({
  increaseCurrency
}))(MiniCoin)

export const MiniCoinGeneratorConnected = connect(({ game: { difficulties } }) => ({
  difficulties,
}), null)(MinicoinGenerator)
