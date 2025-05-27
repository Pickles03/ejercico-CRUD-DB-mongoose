const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.post('/tasks', async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({message: 'Error creating task'});
    }
});

router.get('/', async(req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

router.get('/id/:_id', async(req, res) => {
    const task = await Task.findById(req.params._id);
    res.json(task);
});

router.put('/markAsCompleted/:_id', async(req, res) => {
    const task = await Task.findByIdAndUpdate(req.params._id, { completed: true }, { new: true });
    res.json(task);
});

router.put('/id/:_id', async(req, res) => {
    const task = await Task.findByIdAndUpdate(
        req.params._id,
        {title: req.body.title},
        {new: true}
    );
    res.json(task);
});

router.delete('/id/:_id', async(req, res) => {
    await Task.findByIdAndDelete(req.params._id);
    res.status(204).send();
});

module.exports = router;