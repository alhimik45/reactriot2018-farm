import { connect } from 'react-redux'
import LineIndicator from './components/LineIndicator'

export const ElectroLine = connect(({ game: { electricity } }) => ({
  percents: electricity
}), null)(LineIndicator)
