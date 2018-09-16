import { produce } from 'immer'
import { Tech } from './data'
import fan from './img/fan.svg'

const getItemCost = ({ type, variant }) => Tech[type][variant].cost

const asyncDelay = ms => new Promise(res => setTimeout(res, ms))

const fanItem = {
  type: 'fan',
  cost: 100,
  img: fan,
  heatChange: -50
}

const nextCurrency = mine => ({
  BTC: 'LTC',
  LTC: 'ETH',
  ETH: 'DASH',
  DASH: 'BTC'
}[mine])

export const game = {
  state: {
    currencies: {
      $: 6000,
      BTC: 1,
      LTC: 1,
      DASH: 1,
      ETH: 1
    },
    electricity: 12,
    heatCurrent: 30,
    heatMax: 1000,
    currentItemToBuy: null,
    grid: [
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, { ...fanItem }, null, null],
      [null, null, { ...fanItem }, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, { ...fanItem }, null, null, null, null, null],
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
    tick: produce(state => {
      for (const line of state.grid) {
        for (const item of line) {
          if (!item)
            continue;
          if (item.mine && item.hashes) {
            state.currencies[item.mine] += item.hashes
          }
          if (item.heatChange) {
            state.heatCurrent += item.heatChange
          }
        }
      }
      if (state.heatCurrent < 0) {
        state.heatCurrent = 0
      }
      if (state.heatCurrent > state.heatMax) {
        state.heatCurrent = state.heatMax
      }
    }),
    currencyChange: produce((state, changes) => {
      for (const change of changes)
        state.currencies[change.currency] += change.value
    }),
    switchCurrency: produce((state, { x, y }) => {
      state.grid[y][x].mine = nextCurrency(state.grid[y][x].mine)
    })
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
    },
    async startGame (payload, state) {
      while (true) {
        dispatch.game.tick(payload)
        await asyncDelay(1500)
      }
    },
    async buyCurrency (payload, state) {
      if (state.game.currencies.$ < payload.price) {
        dispatch.fadeMessages.showMessage({ x: payload.mouseX, y: payload.mouseY, text: "No money" })
      } else {
        dispatch.game.currencyChange([{ currency: payload.currency, value: +payload.volume },
          { currency: "$", value: -payload.price }])
      }
    },
    async sellCurrency (payload, state) {
      if (state.game.currencies[payload.currency] < payload.volume) {
        dispatch.fadeMessages.showMessage({ x: payload.mouseX, y: payload.mouseY, text: "No money" })
      } else {
        dispatch.game.currencyChange([{ currency: payload.currency, value: -payload.volume },
          { currency: "$", value: +payload.price }])
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