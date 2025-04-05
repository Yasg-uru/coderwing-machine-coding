import usermodel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await usermodel.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json({
      message: "account created successfully",
      user,
    });
  } catch (error) {
    console.log("this is error ", error);
    res.status(500).json({
      message: "internal Server Error while registering user ",
    });
  }
};
export const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "please provider email and password",
      });
    }
    const user = await usermodel.findOne({
      email,
    });
    const isPassWordValid = await bcrypt.compare(password, user.password);
    if (!isPassWordValid) {
      return res.status(400).json({
        message: "invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    res
      .cookie("token", token, {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      })
      .status(200)
      .json({
        message: "Logged in Successfully",
        token,
        user,
      });
  } catch (error) {
    console.log('this is a error in login user ', error)
    res.status(500).json({
      message: "internal server error ",
    });
  }
};
