const Request = require('./Request');
const Auth = require('./Auth');
const Account = require('./Account');
const Stock = require('./Stock');

module.exports = class RobinhoodNode {
  get Stock() { return Stock };
  get Auth() { return Auth };
  get Account() { return Account };

  constructor(params) {
    if (params.user && params.password) {
      this.getToken(params.user, params.password, params.mfa);
    }
    if (params.token) {
      Request.setToken(params.token);
    }
  }

  async getToken(user, password, mfa) {
    const token = await Auth.getToken(user, password, mfa);
    Request.setToken(token);
    console.log(token);
  }

  get foo() {
    return Stock.foo;
  }

}
