const express = require("express");
const bodyparse = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 8082;
const cors = require("cors");
app.use(cors());

app.use(bodyparse.urlencoded({ extended: false }));
app.use(bodyparse.json());

const jwt = require("jsonwebtoken");

app.listen(port, () => {
  console.log(`server is running ${port}`);
});

mongoose
  .connect("mongodb://127.0.0.1:27017/mydemo", {
    useNewUrlparser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected To Mongooes");
  })
  .catch((error) => {
    console.log("error", error);
  });

//endpoint
const user = require("./models/user");
const order = require("./models/order");
const User = require("./models/user");

const sendverifiCationEmail = async (email, verificationtoken) => {
  //tao email = nodemail
  const transport = nodemailer.createTransport({
    service: "mail",
    auth: {
      user: "chungthuctaikhoan@gmail.com",
      password: "ckjuhhapashwgjup",
    },
  });

  const mailOption = {
    form: "aml.com",
    to: email,
    subject: "Email verification",
    text: `click to verification email htttp://localhost:8081/verify/${verificationtoken}`,
    // 06bc878681f693e19cf8e4d5f21d595c917f6983
  };

  //gui mail
  try {
    await transport.sendMail(mailOption);
  } catch (error) {}
};

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //check
    const exsisting = await user.findOne({ email: email });
    if (exsisting) {
      return res.status(400).json({ message: "User is already exsist" });
    }
    const createNewuser = new { name, email, password }();
    //generation token
    createNewuser.verificationtoken = crypto.randomBytes(20).toString("hex");

    //save
    await createNewuser.save();

    //send verifiedcation email to user
    sendverifiCationEmail(createNewuser.email, createNewuser.verificationtoken);

    res.status(201).json({
      message:
        "Registration successful. Please check your email for verification.",
    });
  } catch (error) {
    console.log("error ", error);
    res.status(500).json;
  }
});

app.get("/verify/:token", async (req, res) => {
  try {
    const token = req.params.token;

    //find user bang token

    const user = await User.findOne({ verificationtoken: token });
    if (!user) {
      res.status(404).json({ message: "token not  exsist" });
    }

    user.verified = true;
    user.verificationtoken = undefined;

    await user.save();

    res.status(200).json({ message: "verification success" });
  } catch (error) {
    res.status(500).json({ message: "Email verifycation false" });
    console.log(error);
  }
});
