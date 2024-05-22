const ccxt = require('ccxt');

const exchange = new ccxt.bybit();
exchange.fetchOrderBook('ROUTE/USDT').then(function(ticker) {
    console.log(ticker);
}).catch(function(error) {
    console.error(error);
});
