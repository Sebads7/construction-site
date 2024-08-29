// controllers/sendEmail.js
const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (value) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: {
        name: "Website Form",
        address: process.env.SENDER_EMAIL, // Use a sender email address if needed
      },
      to: process.env.EMAIL_RECEIVER,
      subject: "New Quote Request",
      html: `
        <p><strong>Name:</strong> ${value.fullname}</p>
        <p><strong>Phone:</strong> ${value.phonenumber}</p>
        <p><strong>Email:</strong> ${value.emailAddress}</p>
        <p><strong>City:</strong> ${value.city}</p>
        ${
          !value.textarea
            ? `<p><strong>Project:</strong> ${value.selectOption}</p>`
            : `<p><strong>Message:</strong> ${value.textarea}</p>`
        }
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};

module.exports = sendEmail;
