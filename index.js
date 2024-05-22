import {version, exchanges, bybit} from 'ccxt';

const exchange = new bybit();
const ticker = await exchange.fetchOrderBook('ROUTE/USDT');
console.log(ticker);
// console.log(version, Object.keys(exchanges));