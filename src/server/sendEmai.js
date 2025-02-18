import nodemailer from "nodemailer";

export const Send_Email = async (from, subject, html) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      user: process.env.EMAILOWNER,
      pass: process.env.EMAILPASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const info = await transporter.sendMail({
    from: from,
    to: process.env.EMAILOWNER,
    subject: subject,
    html: html,
  });
  if (info.accepted.length > 0) {
    return true;
  }
  return false;
};
