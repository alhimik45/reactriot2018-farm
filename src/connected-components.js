import { connect } from 'react-redux'
import LineIndicator from './components/RightPanel/LineIndicator'
import electro from './img/electro.svg'
import fire from './img/fire.svg'
import dollar from './img/dollar.svg'
import pick from './img/pick.svg'
import NumericValue from './components/RightPanel/NumericValue'
import ShopButton from './components/ShopButton'
import Board from './components/Board/Board'

export const ElectroLine = connect(({ game: { electricity } }) => ({
  percents: electricity,
  icon: electro
}), null)(LineIndicator)

export const HeatLine = connect(({ game: { heat } }) => ({
  percents: heat,
  icon: fire
}), null)(LineIndicator)

export const DollarsValue = connect(({ game: { currencies: { $ } } }) => ({
  value: $,
  icon: dollar
}), null)(NumericValue)

export const MegahashValue = connect(({ game }) => ({
  value: 777,
  icon: pick
}), null)(NumericValue)

export const ShopButtonConnected = connect(null, ({ game: { selectToBuy } }) => ({
  buy: selectToBuy
}))(ShopButton)

export const BoardConnected = connect(({ game: { currentItemToBuy, grid } }) => ({
  itemToBuy: currentItemToBuy,
  grid: grid
}), ({ game: { placeItem } }) => ({
  placeItem
}))(Board)