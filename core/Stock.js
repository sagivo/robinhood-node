const Order  = require('./Order');
const Account  = require('./Account');
const Request  = require('./Request');

module.exports = class Stock {
  static get span() {
    return { day: 'day', month: 'month', year: 'year', fiveYears: '5years' };
  }

  constructor(symbols) {
    this.symbols = symbols.toUpperCase();
    this.instruments = {};
  }

  get quote() {
    return Request.get('quotes', { symbols: this.symbols } );
  }

  async instrument(symbol) {
    symbol = symbol || this.symbols.split(',')[0];
    if (!this.instruments[symbol]) {
      this.instruments[symbol] = await Request.get('instruments', { symbol });
    }
    return this.instruments[symbol];
  }

  async marketOrder(orderType, quantity, extraParams = {}) {
    const orderParams = await this.getOrderParams();
    return Order.place({
      quantity,
      side: orderType,
      type: 'market',
      ...orderParams,
      ...extraParams,
    });
  }

  async limitOrder(orderType, quantity, price, extraParams = {}) {
    const orderParams = await this.getOrderParams();
    return Order.place({
      price,
      quantity,
      side: orderType,
      type: 'limit',
      ...orderParams,
      ...extraParams,
    });
  }

  async getOrderParams() {
    return {
      instrument: (await this.instrument()).results[0].url,
      account: await Account.url(),
      symbol: this.symbols.split(',')[0],
    };
  }
}

