const Request = require('./core/Request');
const Auth = require('./core/Auth');
const Account = require('./core/Account');
const Stock = require('./core/Stock');
const Order = require('./core/Order');
const Instrument = require('./core/Instrument');

module.exports = class RobinhoodNode {
  get Stock() { return Stock };
  get Auth() { return Auth };
  get Account() { return Account };
  get Order() { return Order };
  get Instrument() { return Instrument };

  constructor(params = {}) {
    if (params.username && params.password) {
      console.log(params.username, params.password)
      this.getToken(params.username, params.password, params.mfa_code);
    }
    if (params.token) {
      Request.setToken(params.token);
    }
  }

  async getToken(username, password, mfa_code) {
    const token = await Auth.getToken(username, password, mfa_code);
    console.log('token',token)
    Request.setToken(token);
    return token;
  }
}
