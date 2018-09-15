import { produce } from 'immer'

export const game = {
  state: {
    currencies: {
      BTC: 1
    },
    exchangeRates: {
      BTC: 6000
    },
    electricity: 12,
    heat: 30,
    currentItemToBuy: null,
    grid: [
      [null, null, null, null, null],
      [null, { type: "fan" }, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
    ]
  },
  reducers: {
    increaseElectricity: produce((state, increase) => {
      state.electricity += increase || 0
    }),
    selectToBuy: produce((state, type) => {
      state.currentItemToBuy = type
    }),
    placeItem: produce((state, { x, y }) => {
      state.grid[y][x] = { type: state.currentItemToBuy }
      state.currentItemToBuy = null;
    }),
  },
  effects: (dispatch) => ({})
}