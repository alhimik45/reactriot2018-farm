import { connect } from 'react-redux'
import LineIndicator from './components/LineIndicator'
import electro from './img/electro.svg'
import fire from './img/fire.svg'

export const ElectroLine = connect(({ game: { electricity } }) => ({
  percents: electricity,
  icon: electro
}), null)(LineIndicator)

export const HeatLine = connect(({ game: { heat } }) => ({
  percents: heat,
  icon: fire
}), null)(LineIndicator)
