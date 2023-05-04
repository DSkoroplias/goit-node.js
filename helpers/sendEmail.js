const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY, EMAIL_FROM } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: EMAIL_FROM };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;

// const nodemailer = require("nodemailer");
// require("dotenv").config();

// const nodemailerConfig = {
//   host: "smtp.meta.ua",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "dmytro.skoroplias@meta.ua",
//     pass: process.env.META_PASSWORD,
//   },
// };

// const transport = nodemailer.createTransport(nodemailerConfig);

// const data = {
//   to: "gagevic675@pixiil.com",

//   subject: "email test",
//   html: `<h2>Hello</h2>`,
// };

// const sendEmail = async (data) => {
//   const email = { ...data, from: "dmytro.skoroplias@meta.ua" };
//   await transport.sendMail(email);
//   return true;
// };

// module.exports = sendEmail;

// transport
//   .sendMail(email)
//   .then(() => console.log("Email send success"))
//   .catch((error) => console.log(error.message));
