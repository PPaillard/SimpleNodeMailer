const mailer = require("./mailer");

mailer.sendMail(
  {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER, // replace with receiver email
    subject: "This is a Wild test email",
    text: "Hello wild world",
    html: "<p>Hello Wild <em>world</em></p>",
  },
  (err, info) => {
    if (err) console.error(err);
    else console.log(info);
  }
);
