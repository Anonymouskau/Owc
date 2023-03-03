import { json, Router } from "express";
import User from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";



let userdata;
const route = Router();

//FindbyEmail
route.post("/customproperty", (req, res) => {
  console.log(req.body.email);
  const { email } = req.body;
  const { subject } =req.body;
  const { name } =req.body;
  const { text } =req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      userdata = user;
      console.log(userdata);
      res.send("sucess");

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "rsmore2232@gmail.com",
          pass: "olmbarvdtvlioyci", // PERSON ID OF ME DONT USE IT
        },
      });

      let mailOptions = null;
      mailOptions = {
        from: "rsmore2232@gmail.com", // sender address
        to: to_mail, // list of receivers
        subject: "", // Subject line
        html: contents, // plain text body
      };

      const result = {
        Status: "",
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          // console.log(result);
        } else {
          // console.log(info);
        }
        result[Status] = "sucess";
        return result;
      });
    } else {
      res.send({ message: "Not Registered User" });
    }
  });
});


