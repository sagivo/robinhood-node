# Robinhood node
Trade stocks for free with simple to use library.  

## Install
```
yarn add robinhood-node
```

## Use
```js
const RH = require('robinhood-node');
const rh = new RH({ user: 'RH user', password: 'RH password' });
// get account
const account = new rh.Account();
console.log(await account.user);;
// get stock quote
const stock = new rh.Stock('AMZN');
console.log(await stock.quote);
```

## Interface
Each class can be initiated from a robinhood-node instance.  

### RobinhoodNode
This is the main class to use. You can use it in anonymous mode. Some actions like selling/buying will require to login as a Robinhood user. There are 2 ways to login into the library:  
#### user & password (&mfa key):  
```js
new RH({ user: 'your RH email', password: 'your RH password', mfa: 12345 });
```
`mfa` is optional and required only if your settings on Robinhood require it. In order to get the mfa try to leave it empty and then you should get the code on your first attempt.  
#### token:
```js
new RH({ token: 'your RH token' });
```
Once you login with username&password youu should get a token in reponse. this token can be used to access RH API from now on.


### Stock
`constructor(symbols)` - symbols of stocks seperated by comma.  
[`quote`](https://github.com/sanko/Robinhood/blob/master/Quote.md#gather-quote-data-by-ticker-symbol)

### Account
`constructor()`  
[`positions`](https://github.com/sanko/Robinhood/blob/master/Account.md#gather-account-positions)  
[`accounts`](https://github.com/sanko/Robinhood/blob/master/Account.md#gather-list-of-accounts)  
[`user`](https://github.com/sanko/Robinhood/blob/master/Account.md#gather-basic-user-info)  
[`basicInfo`](https://github.com/sanko/Robinhood/blob/master/Account.md#gather-basic-information-about-the-account-holder)  
[`investment`](https://github.com/sanko/Robinhood/blob/master/Account.md#gather-investment-profile-data-about-the-account-holder)  

