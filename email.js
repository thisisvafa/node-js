var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'infovafancy@gmail.com',
    pass: '*********************'
  }
  
//   this is for other website
//   host: "smtp.example.com",
//   port: 587,
//   secure: false, // upgrade later with STARTTLS
//   auth: {
//     user: "username",
//     pass: "password",
//   },
});

var mailOptions = {
  from: 'vafancy23@gmail.com',
  to: 'vafa_v17@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 