import { produce } from 'immer'
import { Tech } from './data'

const getItemCost = ({type, variant}) => Tech[type][variant].cost

export const game = {
  state: {
    currencies: {
      $: 100000,
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
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
    ]
  },
  reducers: {
    increaseElectricity: produce((state, increase) => {
      state.electricity += increase || 0
    }),
    selectToBuy: produce((state, selector) => {
      state.currentItemToBuy = selector
    }),
    placeItem: produce((state, { x, y }) => {
      state.grid[y][x] = { ...state.currentItemToBuy }
      state.currencies.$ -= Tech[state.currentItemToBuy.type][state.currentItemToBuy.variant].cost
      state.currentItemToBuy = null;
    }),
    undoSelect: produce(state => {
      state.currentItemToBuy = null;
    }),
    forcedSetItem: produce((state, {x, y, item}) => {
      state.grid[x][y] = item;
    }),
  },
  effects: (dispatch) => ({
    async buyItem (payload, state) {
      const itemCost = getItemCost(state.game.currentItemToBuy)
      if (state.game.currencies.$ < itemCost) {
        dispatch.fadeMessages.showMessage({ x: payload.mouseX, y: payload.mouseY, text: "No money" })
        dispatch.game.undoSelect()
      }
      else {
        dispatch.game.placeItem(payload)
        dispatch.fadeMessages.showMessage({ x: payload.mouseX, y: payload.mouseY, text: `- $${itemCost}` })
      }
    },
    async startBuyItem (payload, state) {
      const itemCost = getItemCost(payload)
      if (state.game.currencies.$ < itemCost) {
        dispatch.fadeMessages.showMessage({ x: payload.mouseX, y: payload.mouseY, text: "No money" })
      } else {
        dispatch.game.selectToBuy(payload)
      }
    }
  })
}

export const fadeMessages = {
  state: {
    messages: []
  },
  reducers: {
    showMessage: produce((state, msg) => {
      state.messages.push(msg)
      msg.key = Math.random()
    }),
    removeMessage: produce((state, key) => {
      for (let i = 0; i < state.messages.length; ++i)
        if (state.messages[i].key === key)
          state.messages.splice(i, 1)
    }),
  }
}