const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
    },
    isCompleted:{
        type: Boolean,
        required:true,
        default:false,
    }
});

const Task = mongoose.model("Task",taskSchema);

module.exports = Task;