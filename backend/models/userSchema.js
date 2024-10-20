import moongoose from "moongoose";
import validator from "validator";

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema=new moongoose.Schema({
    name:{
        type: String,
        required: [true, "Please provide your name"],
        minLength:[3,"Name must contain atleast 3 characters"],
        maxLength:[30,"Name cannot exceed 30 characters"],

    },
    email:{
        type:String,
        required: [true,"Please provide your email"],
        validate: [validator.isEmail,"Please provide your valid email!"],

    },
    phone:{
        type:Number,
        required: [true, "Please provide your phone number"]
    },
    password:{
        type: String,
        required: [true,"Please provide your password"],
        minLength:[8,"Password must contain atleast 8 characters"],
        maxLength:[32,"Password cannot exceed 32 characters"],
    },
    role:{
        type: String,
        required: [true,"Please provide your role"],
        enum: ["Job Seeker", "Employeer"],

    },
    createdAt:{
        type: Date,
        default: Date.now,
    },

    
});

//Hashing the password

userSchema.pre("save",async function(next){
    if(this.isModified("password")){
        next()
    }
    this.password=await bcrypt.hash(this.password,10)
})

//comparing the password

userSchema.methods.comparePassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};


//generating the JWT token for authorisation
userSchema.methods.getJWTToken=function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY,{
        expiresIn: process.env.JWT_EXPIRE,
    })
}

export const User=moongoose.model("User",userSchema)