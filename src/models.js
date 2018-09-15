import { produce } from 'immer'

export const game = {
  state: {
    currencies: {
      BTC: 1
    },
    electricity: 12,
    heat: 30
  },
  reducers: {
    increaseElectricity: produce((state, increase) => {
      state.electricity += increase || 0
    }),
  },
  effects: (dispatch) => ({})
}