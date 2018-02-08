# Robinhood node
Trade stocks for **FREE** with this simple to use NodeJS library.  
Yes, it's really free using [Robinhood](http://share.robinhood.com/sagivo) service and their [undocumented API](https://github.com/sanko/Robinhood).  
The motivation behind this tool is to aggregate functions based on logic and not necessary api domain.  

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
console.log(await account.user);
// get stock quote
const stock = new rh.Stock('AMZN');
console.log(await stock.quote);
const orderResponse = await stock.buy(1);
// check order and cancel
const order = new rh.Order(orderResponse.id);
console.log(order.status());
order.cancel();
```

## Interface
Each class can be initiated from a robinhood-node instance.  

### Login
In order to login you will need to have a Robinhood account. [Use this link](http://share.robinhood.com/sagivo) to open a free account.  
Some of the calls (like stock quotes) can be used in anonymous mode. 
In order to trade (sell/buy) you will require to login as a Robinhood user. 
There are 2 ways to login into the library:  
#### user & password [&mfa key]:  
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
[`quote`](https://github.com/sanko/Robinhood/blob/master/Quote.md#gather-quote-data-by-ticker-symbol) - get latest quote for symbol(s).  
#### Stock actions
You can place orders directly from the stock class. For information about order types [click here](https://support.robinhood.com/hc/en-us/articles/208650386-Order-Types).  
For a list of extra params available [click here](https://github.com/sanko/Robinhood/blob/master/Order.md#place-an-order).  
`buy(quantity, extraParams = {})`  
`sell(quantity, extraParams = {})`  
`buyLimit(quantity, price, extraParams = {})`  
`sellLimit(quantity, price, extraParams = {})`  
`stopLossSell(quantity, stopPrice, extraParams = {})`  
`stopLossBuy(quantity, stopPrice, extraParams = {})`  
`stopLossSellLimit(quantity, stopPrice, sellPrice, extraParams = {})`  
`stopLossBuyLimit(quantity, stopPrice, buyPrice, extraParams = {})`  

### Order
`constructor(id)` - optional order id.  
[`status(id)`](https://github.com/sanko/Robinhood/blob/master/Order.md#gather-order-information) - get order status. order id is optional (can be set up when initiated).  
[`cancel(id)`](https://github.com/sanko/Robinhood/blob/master/Order.md#cancel-an-order) - cancel an order. order id is optional (can be set up when initiated).  
[`recent`](https://github.com/sanko/Robinhood/blob/master/Order.md#gather-recent-orders) - get recent orders.  
[`static place(params)`](https://github.com/sanko/Robinhood/blob/master/Order.md#place-an-order) - manually place an order. a better use will be to interact with Stock class in order to place an order.  

### Account
`constructor()`  
[`positions`](https://github.com/sanko/Robinhood/blob/master/Account.md#gather-account-positions)  
[`accounts`](https://github.com/sanko/Robinhood/blob/master/Account.md#gather-list-of-accounts)  
[`user`](https://github.com/sanko/Robinhood/blob/master/Account.md#gather-basic-user-info)  
[`basicInfo`](https://github.com/sanko/Robinhood/blob/master/Account.md#gather-basic-information-about-the-account-holder)  
[`investment`](https://github.com/sanko/Robinhood/blob/master/Account.md#gather-investment-profile-data-about-the-account-holder)  


## TODO
There are a lot of [API calls](https://github.com/sanko/Robinhood) that are still not implemented here. The important calls are. Any help or PR will be highly appriciated!  
