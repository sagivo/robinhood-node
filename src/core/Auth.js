const Request  = require('./Request');

module.exports = class Auth {
  constructor(args) {
    return Request.post('oauth2/token', { symbols: this.symbols.map(s => s.toUpperCase()).join(',') } );
  }

  static getToken(username, password, mfa_code) {
    const device_token = mfa_code ? Auth.generateDeviceToken() : null;
    return Request.post('oauth2/token', { username, password, mfa_code, device_token, grant_type: 'password', client_id: 'c82SH0WZOsabOXGP2sxqcj34FxkvfnWRZBKlBjFS' });
  }

  static generateDeviceToken() {
    const rands = [];
    for (let i = 0; i < 16; i++) {
      const r = Math.random();
      const rand = 4294967296.0 * r;
      rands.push(
        (rand >> ((3 & i) << 3)) & 255
      );
    }
  
    let id = '';
    const hex = [];
    for (let i = 0; i < 256; ++i) {
      hex.push(Number(i + 256).toString(16).substring(1));
    }
  
    for (let i = 0; i < 16; i++) {
      id += hex[rands[i]];
      if (i == 3 || i == 5 || i == 7 || i == 9) {
        id += "-";
      }
    }
  
    return id;
  };
}
