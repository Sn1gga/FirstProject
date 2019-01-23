//Задание 2. Добавление в начало строки

// var fs = require('fs');

// fs.appendFile('test.txt', '\nHello, its new string', function(err){	
// });


//Задание 3. Отправка письма на почту

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'asnigur2019@gmail.com',
    pass: 'snigurpassword'
  }
});

var mailOptions = {
  from: 'asnigur2019@gmail.com',
  to: 'asnigur2019@gmail.com',
  subject: 'Sending Email to myself using Node.js',
  text: 'Easy peasy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});



