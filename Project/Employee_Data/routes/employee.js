const express = require("express")

const router = express.Router()
//add new employee Data
router.post("/",require("../controllers/employee").createEmployee)

//get all employees Details
router.get("/",require("../controllers/employee").getAllEmployeeInfo)

//get Specified employee Details
router.get("/:userId",require("../controllers/employee").getEmployeDetails)

//update Specified employee Details
router.put("/:userId",require("../controllers/employee").updateEmployeeDetails)

//update Specified employee Details
router.delete("/:userId",require("../controllers/employee").deleteEmployeeDetails)

module.exports = router