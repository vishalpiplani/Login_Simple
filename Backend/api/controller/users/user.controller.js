const {
  createAdmin,
  getUserByUserEmail, 
} = require("./../../models/user.model");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const path = require('path')

module.exports = {
  createAdmin: function (req, res) {
    const body = req.body;
    console.log(body);
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    createAdmin(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror"
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
        message: "Successfully saved"
      });
    });
  },

  login: (req, res) => {
    const body = req.body;
    console.log(body);
    getUserByUserEmail(body.email, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.status(400).json({
          success: 0,
          message: "Invalid email or password"
        });
      }
      const result = compareSync(body.password, results.password);

      if (result) {
        results.password = undefined;
        const jsontoken = sign({ result: results }, process.env.JWT_KEY, {
          expiresIn: 60 * 60 * 1
        });
        return res.status(200).json({
          success: 1,
          message: "login successfully",
          token: jsontoken,
          data: results
        });
      } else {
        return res.status(400).json({
          success: 0,
          message: "Invalid email or password"
        });
      }
    });
  }}