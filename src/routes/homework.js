const{Router}=require("express")
const router=Router()

const homeworkController=require('../controllers/homework.controller.js')  

router.get("/",homeworkController.getHomeworks)
router.post("/",homeworkController.createHomework)
router.get("/:id",homeworkController.getHomework)
router.put("/:id",homeworkController.editHomework)
router.delete("/:id",homeworkController.deleteHomework)


module.exports=router