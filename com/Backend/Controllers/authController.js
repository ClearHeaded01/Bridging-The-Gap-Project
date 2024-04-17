import User from '../models/User.js';
import bcrypt from 'bcryptjs'
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';






export const signup = async (req, res, next) => {
    const { username, email, password } = req.body ;
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = bcrypt.hashSync(password, salt)
    const newUser = new User({ username, email, password: hashedPassword })
    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (err) {
        next(err)
    }
}

export const signin = async(req, res, next) => {
    const {email , password } = req.body;
    try {
        const foundUser = await User.findOne({email});
        if(!foundUser) {
            return next(errorHandler(404, "User not found"))
        }
        const isMatch = await bcrypt.compare(password, foundUser.password)
        if(!isMatch) {
            return next(errorHandler(400, "Wrong credentials"))
        }
        const token = jwt.sign({ id: foundUser._id }, process.env.JWT_SECRET);
        const { password:pass, ...others } = foundUser._doc;
        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(others)
    } catch (error) {
        next(error)
    }
}



export const signout = (req, res) => {
    try {
        res.clearCookie("access_token").status(200).json("User has been logged out")
    } catch (error) {
        next(error)
    }
}
