const mongoose=require("mongoose")

const studentSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    mobileNumber:{
        type:Number,
        require:true
    },
    password:String
})

module.exports=mongoose.model("Record",studentSchema)