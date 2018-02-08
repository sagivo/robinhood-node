const Request = require('./core/Request');
const Auth = require('./core/Auth');
const Account = require('./core/Account');
const Stock = require('./core/Stock');
const Order = require('./core/Order');

module.exports = class RobinhoodNode {
  get Stock() { return Stock };
  get Auth() { return Auth };
  get Account() { return Account };
  get Order() { return Order };

  constructor(params) {
    if (params.user && params.password) {
      this.getToken(params.user, params.password, params.mfa);
    }
    if (params.token) {
      Request.setToken(params.token);
    }
  }

  async init() {
    await Account.url();
  }

  async getToken(user, password, mfa) {
    const token = await Auth.getToken(user, password, mfa);
    Request.setToken(token);
    return token;
  }
}