const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/Employee_Data")

module.exports = mongoose