const Task = require('../modules/tasks')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error')
const express = require('express')
const router = express.Router()

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
    
})
const createTasks = async (req, res) => {
    try {
      const task = await Task.create(req.body)
      res.status(201).json({ task })
    }catch (error) {
        res.status(500).json({msg:error})
    }
    
}
const getTask = asyncWrapper(async (req, res, next) => {
    
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        //if we have the correct syntax for the id but we cannot find the item
       if (!task){
        const error = new Error('Not Found')
        error.status = 404
        return next(error)
        return res.status(404).json({msg:`No task with id : ${taskID}`})
       }

    
    res.status(200).json({ task })
})
const updateTask = async (req, res) => {
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
            new: true,
            runValidators: true,
            
        })
    } catch(error){
        res.status(500).json({ msg: error })
    }
}
const delTask = async (req, res) => {
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID})
        if (!task){
        return res.status(404).json({msg:`No task with id : ${taskID}`})
       }
    } catch (error){
        res.status(500).json({ msg: error })
    }
    res.status(200).json({task: null, status: 'success'})
}
module.exports = {
    getAllTasks,
    createTasks, getTask, updateTask, delTask
}
