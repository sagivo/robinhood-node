const Request  = require('./Request');

module.exports = class Account {

  static async url() {
    if (!this._url) {
      const accounts = await Request.getPersonal('accounts');
      this._url = accounts.results[0].url;
    }
    return this._url;
  }

  constructor() {
  }

  get positions() {
    return Request.getPersonal('positions');
  }

  get accounts() {
    return Request.getPersonal('accounts');
  }

  get user() {
    return Request.getPersonal('user');
  }

  get investment() {
    return Request.getPersonal('user/investment_profile');
  }

  get basicInfo() {
    return Request.getPersonal('user/basic_info');
  }
}

