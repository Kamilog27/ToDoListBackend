const homeworkcontroller={}
const Homework=require("../models/Homework")


homeworkcontroller.getHomeworks=async(req,res)=>{
    const homeworks=await Homework.find()
    res.json(homeworks)
}
homeworkcontroller.createHomework=async(req,res)=>{
    const newHomework= new Homework(req.body)
    await newHomework.save()
    res.send({message:"Homework Created"})
}
homeworkcontroller.getHomework=async(req,res)=>{
    console.log(req.params)
    const homework=await Homework.findById(req.params.id)
    res.send(homework)
}
homeworkcontroller.editHomework=async(req,res)=>{
    await Homework.findByIdAndUpdate(req.params.id,req.body)
    res.json({message:"Homework Updated"})
}
homeworkcontroller.deleteHomework=async(req,res)=>{
    await Homework.findByIdAndDelete(req.params.id)
    res.json({status:"Homework deleted"})
}

module.exports=homeworkcontroller;