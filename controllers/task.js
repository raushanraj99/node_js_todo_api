const { ErrorHandler } = require("../middlewares/error.js");
// const ErrorHandler  = require("../middlewares/error");
const Task = require("../models/task");



const newTask = async (req,res,next)=>{
   try {
      
      const {title,description} = req.body;

   console.log(req.user);

   await Task.create({
      title,description,user:req.user,
   })

   res.status(201).json({
      success:true,
      message:"Task added Successfully",
   })
   } catch (error) {
      next(error)
      
   }

}

const getMyTask = async (req,res,next)=>{

  try {

  const userId =  req.user._id
  const tasks = await Task.find({user:userId})

   res.status(200).json({
      success:true,
      message:"complete array ",
      tasks,
   })
  } catch (error) {

      next(error)

  }
}

const updateTask = async (req,res,next)=>{
   try {
      const id = req.params.id;

      const task = await Task.findById(id);
   
      // if(!task) return next(new Error("Nice update error"))
      if(!task) return next(new ErrorHandler("Task not Found",404))
   
      task.isCompleted = !task.isCompleted;
      await task.save()
   
      res.status(200).json({
         success:true,
         message:"Task updated"
      })
      
   } catch (error) {
      next(error)
   }
  
}

const deleteTask = async (req,res,next)=>{
   try {
      const id = req.params.id;

      const task = await Task.findById(id);
   
      // if(!task) return next(new Error("Task Not Found"))
      if(!task) return next(new ErrorHandler("Task not Found",404))
   
      await task.deleteOne();
   
   
      res.status(200).json({
         success:true,
         message:"Task Deleted",
      })
      
   } catch (error) {
      next(error)
   }
  
}



module.exports = {newTask,getMyTask,updateTask,deleteTask}