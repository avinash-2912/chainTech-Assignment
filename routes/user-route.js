const express = require('express');
const Task = require('../model/taskSchema')

const router = express.Router();

router.get('/task',async (req,res)=>{
    try{
        const alltask = await Task.find();
        res.status(200).json({tasks:alltask,message:"fetched successfully"});
    } 
    catch{
        res.status(500).json({error:err.message})
    }
    
})

router.post('/task',async (req,res)=>{
    const {title,description} = req.body;
    try{
        const newtask = new Task({
            title:title,
            description:description
        });
        await newtask.save();
        res.status(200).json({task:newtask,message:"task added successfully"});
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
    
})

router.patch('/task/mark/:id',async(req,res)=>{
    const id = req.params.id;
    try{
        const task = await Task.findById(id);
        if(!task){
            return res.status(404).json({message:"Task Not Found!"});
        }
        if(task.isCompleted == true){
           return res.status(200).json({message:"Already Completed!"});
        }else{
            task.isCompleted = true;
            await task.save();
            return res.status(200).json({message:"Task marked completed!"})
        }
    }catch(err){
        res.status(500).json({error:err.message})
    }

})

router.put('/task/:id',async(req,res)=>{
    const id = req.params.id;
    const {title,description,isCompleted} = req.body;
    try{
        const task = await Task.findById(id);
        if(!task){
            return res.status(404).json({message:"Task Not Found!"});
        }
        if(title.length == 0) return res.status(404).json({message:"Title should not be empty"});
        task.title = title,
        task.description = description,
        task.isCompleted = isCompleted
        await task.save();
        return res.status(200).json({message:"Successfully updated!"});
    }catch(err){
        res.status(500).json({error:err.message})
    }

})

router.delete('/task/:id',async(req,res)=>{
    const id = req.params.id;
    try{
        const task = await Task.findById(id);
        if(!task){
            return res.status(404).json({message:"Task Not Found!"});
        }
        await Task.deleteOne({ _id: id });
        return res.status(200).json({message:"Successfully deleted!"});
    }catch(err){
        res.status(500).json({error:err.message})
    }

})

module.exports = router;

