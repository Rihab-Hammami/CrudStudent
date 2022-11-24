const express=require('express')
const router=express.Router()
const {getStudent,addStudent,updateStudent,deleteStudent}=require("../controllers/studentControllers")

router.get('/',getStudent)
router.post('/',addStudent)
router.put('/:id',updateStudent)
router.delete('/:id',deleteStudent)
module.exports=router