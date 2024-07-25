// // pages/api/send-email.js
// import nodemailer from "nodemailer";

// export async function handler(req, res) {
//   console.log("i am here");
//   if (req.method === "POST") {
//     const { name, email, message } = req.body;

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "rushvik249@gmail.com",
//         pass: "Rushvik@1029",
//       },
//     });

//     const mailOptions = {
//       from: email,
//       to: "rushvik249@gmail.com",
//       subject: `New message from ${name}`,
//       text: message,
//     };

//     try {
//       const data = await transporter.sendMail(mailOptions);
//       res.status(200).json({ success: true });
//       console.log("res data", data);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ success: false, error: "Failed to send email" });
//     }
//   } else {
//     res.status(405).json({ success: false, error: "Method not allowed" });
//   }
// }
