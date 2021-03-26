const nodemailer = require("nodemailer");

let transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

// const message = {
//   from: 'elonmusk@tesla.com', // Sender address
//   to: 'to@email.com',         // List of recipients
//   subject: 'Design Your Model S | Tesla', // Subject line
//   text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
// };

// transport.sendMail(message, function(err, info) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(info);
//   }
// });
