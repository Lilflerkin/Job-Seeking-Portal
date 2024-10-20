import {catchAsyncError} from './middlewares/catchAsyncError.js'
import ErrorHandler from '../middlewares/error.js';
import {User, user} from '../models/userSchema.js'
export const register = catchAsyncErrors(async (req, res, next) => {
    const { name, email, phone, password, role } = req.body;
    if (!name || !email || !phone || !password || !role) {
      return next(new ErrorHandler("Please fill full form!"));
    }

    const isEmail=await User.findOne({email});
    if(isEmail){
        return next(new ErrorHandler("email already exists!"))
    }
    const user = await User.create({
        name, email, phone, password, role,
    });
    res.status(200).json({
        success: true,
        message: "User registered!",
        user,

    });
})