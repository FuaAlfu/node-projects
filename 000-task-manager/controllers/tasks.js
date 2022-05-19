const asyncWrapper = require('..middleware/async');
const Task = require('../models/Task');
const {createCustomError} = require('../errors/custom-errors');

const getAllTasks = asyncWrapper( async (req,res) => {
    //res.send("get all tasks");
   // try {
        const tasks = await Task.find({}); 
        //res.status(200).json({success: true,data:{tasks,nbHits:tasks.length}});
       // res.status(200).json({tasks,amount:tasks.length});
        res.status(200).json({tasks});
   // } catch (error){
      //  res.status(500).json({msg:error});
   // }
});

const createTask = asyncWrapper( async (req,res) => {
    //res.send("create task");
    // res.json(req.body);
   // try{
        const task = await Task.create(req.body);
        res.status(201).json({ task });
  //  } catch (error){
    //    res.status(500).json({msg:error});
   // }
    
});

const getTask = asyncWrapper( async (req,res,next) => {
   // res.send("get single task");
  // try {
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id:taskID});
        if(!task){
            //error handle stuff
            // const error = new Error('not found');
            // error.status = 404;
            // return next(error);

            //  return res.status(404).json({msg:`No Task with id: ${taskID}`});
            return next(createCustomError(`No Task with id: ${taskID}`,404));
        }
        res.status(200).json({task});
  //  } catch (error){
     //   res.status(500).json({msg:error});
   // }
});

const updateTask = asyncWrapper( async (req,res) => {
   // try {
        //res.send("update task");
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new: true,
            runValidators: true,
        });
        if(!task){
            return res.status(404).json({msg:`No Task with id: ${taskID}`});
        }
        res.status(200).json({task});

  //  } catch (error) {
    //    res.status(500).json({msg:error});
   // }
});

//patch, a patial update
const editTask = asyncWrapper( async (req,res) => {
    //try {
        //res.send("update task");
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new: true,
            runValidators: true,
            overwrite: true,
        });
        if(!task){
            return res.status(404).json({msg:`No Task with id: ${taskID}`});
        }
        res.status(200).json({task});

   // } catch (error) {
   //     res.status(500).json({msg:error});
   // }
});

const deleteTask = asyncWrapper(async (req,res) => {
   // try {
        //res.send("delete task");
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        if(!task){
            return res.status(404).json({msg:`No Task with id: ${taskID}`});
           // res.status(200).json({task:null, status: 'delete it'}); //another way
        }
        res.status(200).json({task});
  //  } catch (error) {
   //     res.status(500).json({msg:error});
   // }
});

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    editTask,
    deleteTask
}