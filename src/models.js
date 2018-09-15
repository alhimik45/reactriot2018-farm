import { produce } from 'immer'
import { Tech } from './data'

export const game = {
  state: {
    currencies: {
      $: 1000,
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
      state.currencies.$ -= Tech[state.currentItemToBuy].cost
      state.currentItemToBuy = null;
    }),
    undoSelect: produce(state => {
      state.currentItemToBuy = null;
    }),
  },
  effects: (dispatch) => ({
    async buyItem(payload, state){
      if(state.game.currencies.$ < Tech[state.game.currentItemToBuy].cost)
        alert("No money")
      else
        dispatch.game.placeItem(payload)
    }
  })
}