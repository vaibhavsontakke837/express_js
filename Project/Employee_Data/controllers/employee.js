const employeeModule = require("../module/employee")


//create new employee
exports.createEmployee = async (req, res) => {
    try {
        const newEmployee = new employeeModule(req.body)
        res.status(200).json(await newEmployee.save())
    } catch (err) {
        res.status(500).json({ error: err })
    }

}

//get all employee
exports.getAllEmployeeInfo =async (req, res) => {
    try {
        const employees =await employeeModule.find();
        res.status(200).json(employees)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}


//get Specified employee details
exports.getEmployeDetails =async (req,res) =>{
    try {
        const employee =await employeeModule.find({_id:req.params.userId})
        res.status(500).json(employee)
    } catch (err) {
        res.status(500).json({error:err}) 
    }
}

//update Specified employee Details
exports.updateEmployeeDetails=(req,res)=>{
    employeeModule.findOneAndUpdate({_id:req.params.userId},
                                        req.body,
                                        {new:true},
                                        (err,data)=>{
                                            if(err){
                                                res.status(500).json({error:err})
                                            }else{
                                                res.status(200).json(data)
                                            }
                                        })
}

//delete Specified employee Details
exports.deleteEmployeeDetails=(req,res)=>{
    employeeModule.findOneAndDelete({_id:req.params.userId},(err,data)=>{
        if(err){
            res.status(500).json({error:err})
        }else{
            res.status(200).json(data)
        }
    })
}