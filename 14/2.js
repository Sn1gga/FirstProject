
//Задача 2
var user = 'Anton';

var date = new Date();

var Event = require('events');

var emt = new Event();

emt.on('login', function(){
	console.log('User: ', user, ' logged to the server at: ', date.toLocaleTimeString());
});

emt.on('logout', function(){
	console.log('User: ', user, ' logged out from the server at: ', date.toLocaleTimeString());
});

emt.on('click', function(){
	console.log('User: ', user, ' clicked on the mouse at: ', date.toLocaleTimeString());
});

emt.emit('login');
emt.emit('logout');
emt.emit('click');




