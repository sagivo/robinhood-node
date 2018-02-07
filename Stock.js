const Request  = require('./Request');

module.exports = class Stock {
  static get span() {
    return { day: 'day', month: 'month', year: 'year', fiveYears: '5years' };
  }

  constructor(symbols) {
    this.symbols = (typeof(symbols) === 'string') ?  [symbols] : symbols;
  }

  get quote() {
    return Request.get('quotes', { symbols: this.symbols.map(s => s.toUpperCase()).join(',') } );
  }
}

