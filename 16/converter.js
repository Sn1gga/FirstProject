var request = require('sync-request');
var clc = require('cli-color');
var res = request('GET', 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
var exRate = JSON.parse(res.getBody('utf8'));
var usdRate = exRate[27].rate;
var eurRate = exRate[34].rate;

function roundTwoDecimal(amount) {
	return Math.round(amount *100) / 100;
}

module.exports.convertUsdToUa = function(currency) {
	console.log(clc.red(currency) + clc.green(' USD = ') + clc.yellow(roundTwoDecimal(currency * usdRate)) + clc.green(' UAH'));
}

module.exports.convertUaToUsd = function(currency) {
	console.log(clc.red(currency) + clc.green(' UAH = ') + clc.yellow(roundTwoDecimal(currency / usdRate)) + clc.green(' USD'));
}

module.exports.convertEurToUa = function(currency) {
	console.log(clc.red(currency) + clc.green(' EUR = ') + clc.yellow(roundTwoDecimal(currency * eurRate)) + clc.green(' UAH'));
}

module.exports.convertUaToEur = function(currency) {
	console.log(clc.red(currency) + clc.green(' UAH = ') + clc.yellow(roundTwoDecimal(currency / eurRate)) + clc.green(' EUR'));
}