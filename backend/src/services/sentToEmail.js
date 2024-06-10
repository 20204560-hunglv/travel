const nodemailer = require("nodemailer");
const mailConfig = require("../config/mailConfig");

const sentToEmail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    host: mailConfig.host,
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: mailConfig.username,
      pass: mailConfig.password,
    },
  });

  await transporter.sendMail({
    from: `"Travel App" ${mailConfig.username}`, // sender address
    to: email, // list of receivers
    subject: "Xác thực Email", // Subject line
    html: `<h1>Please confirm your OTP</h1>
       <p>Here is your OTP code: ${otp}</p>`, // html body
  });

  console.log("Message sent success");
};

module.exports = { sentToEmail };
