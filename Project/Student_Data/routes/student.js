const express=require("express")

const router = express.Router()



//send data to db
router.post("/",require("../controllers/student").createStudent)

//get all student information
router.get("/",require("../controllers/student").getAllStudentInfo)

//get specified Student information
router.get("/:userId",require("../controllers/student").getStudentInfo)

//update Sepecidied student Info
router.put("/:userId",require("../controllers/student").updateStudentInfo)

//delete Specified Student Info
router.delete("/:userId",require("../controllers/student").deleteStudentInfo)

module.exports=router