import { produce } from 'immer'
import { Tech } from './data'
import fan from './img/fan.svg'
import helpers from './components/Board/helpers'

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
      $: 607770,
      BTC: 0,
      LTC: 0,
      DASH: 0,
      ETH: 0
    },
    difficulties: {
      BTC: 400,
      LTC: 400,
      DASH: 400,
      ETH: 400
    },
    heatCurrent: 30,
    heatMax: 250,
    sellActive: false,
    currentItemToBuy: null,
    grid: [
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
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
      state.grid[y][x].cost = Math.round(state.grid[y][x].cost / 2);
      state.currencies.$ -= Tech[state.currentItemToBuy.type][state.currentItemToBuy.variant].cost
      // state.currentItemToBuy = null;
    }),
    undoSelect: produce(state => {
      state.currentItemToBuy = null;
      state.sellActive = false;
      document.getElementsByTagName("body")[0].style.cursor = "";
    }),
    forcedSetItem: produce((state, { x, y, item }) => {
      state.grid[x][y] = item;
    }),
    tick: produce(state => {
      for (const line of state.grid) {
        for (const item of line) {
          if (!item)
            continue;
          // if (item.mine && item.hashes) {
          //   state.currencies[item.mine] += item.hashes
          // }
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
      if (state.heatCurrent > state.heatMax * 0.8) {
        let rnd = helpers.getRandomCell(state.grid);
        let x = rnd[0];
        let y = rnd[1];
        let i = 0
        while (state.grid[x][y] == null || state.grid[x][y].type === 'coin') {
          ++i;
          if (i > 100) return
          rnd = helpers.getRandomCell(state.grid);
          x = rnd[0];
          y = rnd[1];
        }
        const elem = state.grid[x][y]
        switch (elem.type) {
          case 'universal':
          case 'asic':
            elem.hashes = Math.floor(elem.hashes * 0.8)
            elem.cost = Math.floor(elem.cost * 0.9)
            break;
        }
      }
    }),
    currencyChange: produce((state, changes) => {
      for (const change of changes)
        state.currencies[change.currency] += change.value
    }),
    switchCurrency: produce((state, { x, y }) => {
      state.grid[y][x].mine = nextCurrency(state.grid[y][x].mine)
    }),
    setSell: produce((state, val) => {
      state.sellActive = val
    }),
    sell: produce((state, { x, y }) => {
      state.currencies.$ += state.grid[y][x].cost;
      state.grid[y][x] = null
      // state.sellActive = false
    }),
    increaseScore: produce((state, { curr, delta }) => {
      const dict = {
        'ethereum': 'ETH',
        'litecoin': 'LTC',
        'dash': 'DASH',
        'bitcoin': 'BTC'
      };

      state.currencies[dict[curr]] += delta;
    }),
    incCurrency: produce((state, { currency, value }) => {
      state.currencies[currency] += value;
      state.difficulties[currency] += 5;
    }),
  },
  effects: (dispatch) => ({
    async updateScore (payload) {
      dispatch.game.increaseScore(payload);
    },
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
      if (state.game.sellActive) return;
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
    },
    async toggleSell (payload, state) {
      if (document.getElementsByTagName("body")[0].style.cursor === "") {
        document.getElementsByTagName("body")[0].style.cursor = `url("/dollar.png"), pointer`;
        dispatch.game.setSell(true)
      } else {
        document.getElementsByTagName("body")[0].style.cursor = "";
        dispatch.game.setSell(false)
      }
    },
    async sellItem (payload, state) {
      if (state.game.grid[payload.y][payload.x] == null)
        return
      dispatch.fadeMessages.showMessage({
        x: payload.mouseX,
        y: payload.mouseY,
        text: `+$${state.game.grid[payload.y][payload.x].cost}`
      })
      dispatch.game.sell(payload)
      document.getElementsByTagName("body")[0].style.cursor = "";
    },
    async increaseCurrency (payload, state) {
      dispatch.fadeMessages.showMessage({
        x: payload.mouseX,
        y: payload.mouseY,
        text: `+ ${payload.value} ${payload.currency}`
      })
      dispatch.game.incCurrency(payload)
    },
    async upMessage (payload, state) {
      const dict = {
        'ethereum': 'ETH',
        'litecoin': 'LTC',
        'dash': 'DASH',
        'bitcoin': 'BTC'
      };
      dispatch.fadeMessages.showMessage({
        x: payload.mouseX,
        y: payload.mouseY,
        text: `+ ${payload.delta} ${dict[payload.curr]}`
      })
      dispatch.game.incCurrency(payload)
    },
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