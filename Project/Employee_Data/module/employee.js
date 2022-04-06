const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    mobileNumber:Number
})

module.exports = mongoose.model("employee_details",employeeSchema)

