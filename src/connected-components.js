import { connect } from 'react-redux'
import LineIndicator from './components/LineIndicator'
import electro from './img/electro.svg'

export const ElectroLine = connect(({ game: { electricity } }) => ({
  percents: electricity,
  icon: electro
}), null)(LineIndicator)
