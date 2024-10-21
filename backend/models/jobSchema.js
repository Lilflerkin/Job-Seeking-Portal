import mongoose from "mongoose";
import validator from "validator";

const JobSchema=new mongoose.Schema({
    title: {
        type: String,
        required: [true,"Please provide job title"],
        minLength:[3,"Job title must contain atleast 3 characters"],
        maxLength:[50,"Job Title cannot exceed 50 characters"],
    },
    description: {
        type: String,
        required: [true,"Please provide job description"],
        minLength:[50,"Job desc must contain atleast 50 characters"],
        maxLength:[350,"Job Title cannot exceed 350 characters"],

    },
    category: {
        type: String,
        required: [true, "Job Category is required"],
    },
    country: {
        type: String,
        required: [true,"Job Country is requitred"],
    },
    city: {
        type: String,
        reequired: [true,"Job city is required"],

    },
    location:{
        type: String,
        required:[true,"Please provide exact location"],
        minLength:[50,"Job location must contain atleast 50 characters"],
    },
    fixedSalary:{
        type: Number,
        minLength:[4,"Fixed salary must contain atleast 4 digits"],
        maxLength:[9,"Fixed salary must not contain exceed 9 didgits"],

    },
    salaryFrom:{
        type: Number,
        minLength:[4,"Salary from must contain atleast 4 digits"],
        maxLength:[9,"Salary from must not contain exceed 9 didgits"],
    },
    salaryTo:{
        type: Number,
        minLength:[4,"SalaryTo must contain atleast 4 digits"],
        maxLength:[9,"SalaryTo must not contain exceed 9 didgits"],
    },
    expired:{
        type: Boolean,
        default: false,
    },
    jobPostedOn:{
        type: Date,
        default: Date.now(),
    },
    postedBy:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required:true,

    },


})

export const Job=mongoose.model("Job",JobSchema)