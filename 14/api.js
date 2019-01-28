//Работа с API с помощью nodejs

// var request = require('request');

// var url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR07BCrAIGgMrUH86KRcjlLPV_yco0AB-9CLCqQIXrNsDXyclRNCyFGovM0';

// request(url, function(err, res, body){
// 	if (err) {
// 		throw err;
// 	}
// 	var apiBody = JSON.parse(body);
// 	console.log(apiBody);
// });




//Работа с API без nodejs (вывод в консоль в виде массива объектов)
var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

getJSON('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR07BCrAIGgMrUH86KRcjlLPV_yco0AB-9CLCqQIXrNsDXyclRNCyFGovM0',
function(err, data) {
  if (err !== null) {
    alert('Something went wrong: ' + err);
  } else {
		console.log(data)
  }
});

