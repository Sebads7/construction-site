const nodemailer = require("nodemailer");
require("dotenv").config();

const receivers = process.env.EMAIL_RECEIVER;

const sendEmail = async (value) => {
  try {
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: {
        name: "Website form",
      }, // sender address
      to: `${receivers}`, // list of receivers
      subject: "New Contact Form Submission", // Subject line
      html: `
        <p><strong> Name:</strong> ${value.firstname} ${value.lastname}</p>
        <p><strong>Email:</strong> ${value.emailAddress}</p>
        <p><strong>City:</strong> ${value.city}</p>
        ${
          !value.textarea
            ? `<p><strong>Option:</strong> ${value.selectOption}</p>`
            : `<p><strong>Message:</strong> ${value.textarea}</p>`
        }
      `, // html body
    });

    console.log("Message sent: to", receivers);
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendEmail;
