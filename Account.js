const Request  = require('./Request');

module.exports = class Account {

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

  get basicInfo() {
    return Request.getPersonal('user/basic_info');
  }
}

