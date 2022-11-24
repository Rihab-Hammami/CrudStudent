const Student=require('../models/studentModels')


const getStudent=async(req,res)=>{
    /*if(req.body.classe="1"){
        res.json({classe:"L1"})
    }*/
    const student=await Student.find()
    res.status(200).json(student) 
}

const addStudent=async(req,res)=>{
  
    if(!req.body.nom){
        res.status(400).json({message: ' veuillez ajouter nom '})
    }

    if(!req.body.prenom){
        res.status(400).json({message: ' veuillez ajouter prenom'})
    }
    if(!req.body.email){
        res.status(400).json({message: ' veuillez ajouter email'})
    }
    if(!req.body.classe){
        res.status(400).json({message: ' veuillez ajouter classe'})
    }

    
    
    const student=await Student.create(
        {
            nom: req.body.nom,
            prenom: req.body.prenom,
            email: req.body.email,
            classe: req.body.classe,
             
        }
        
    )
    
    res.status(200).json(student) 
}

const updateStudent=async(req,res)=>{
    const student=await Student.findById(req.params.id)
    
    /*if(!student){
        res.status(400).json({message:"erreur"})
}*/
    const updateStudent=await Student.findByIdAndUpdate(req.params.id,req.body,{new:true })
    res.status(200).json(student) 
}

const deleteStudent=async(req,res)=>{
    const student=await Student.findById(req.params.id)

    /*if(!student){
        res.status(400).json({message:"erreur"})
}*/
    await student.remove()
    res.status(200).json({id:req.params.id}) 
}







module.exports={getStudent,addStudent,updateStudent,deleteStudent}