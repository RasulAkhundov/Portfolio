const express = require("express");
const router = express.Router();
const nodeMailer = require('nodemailer');

// router.post('/post-contact', async (req, res) => {
//     const { name, email, subject, message } = req.body;

//     let transporter = nodeMailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false,
//         auth: {
//             user: 'sabirjafarov2@gmail.com',
//             pass: 'oorzgpfwdhlmloyd'
//         }
//     });

//     let info = await transporter.sendMail({
//         from: email,
//         to: 'sabirjafarov2@gmail.com',
//         subject: subject,
//         text: message,
//         html: `<p>message come from: ${email}</p>
//                 <p>Sender name: ${name}</p>
//                 <p>Subject: ${subject}</p>
//                 <p>Messsage: ${message}</p>`
//     })
// })

module.exports = router;