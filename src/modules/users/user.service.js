import StyleMessage from "../../server/emailStyle.js";
import { Send_Email } from "../../server/sendEmai.js";

export const sendDetails = (req, res, next) => {
  try {
    const { name, email, phone, contant } = req.body;
    // Send Data
    Send_Email(
      email,
      `New Message from ${email}`,
      StyleMessage(name, phone, contant, email)
    );

    res
      .status(200)
      .json({ msg: "done", name: name, phone: phone, message: contant });
  } catch (error) {
    res.status(400).json("Error", error);
  }
};
