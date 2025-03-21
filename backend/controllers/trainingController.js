const Training = require('../models/training');


exports.createTraining = async (req, res) => {
    try{
        const newTraining = new Training(req, body);
        await newTraining.save();
        res.status(201).json(newTraining);
    }   catch (err) {
        res.status(400).json({ error: err.message});
    }
};

exports.getTrainings = async (req, res) => {
    try {
        const trainings = await Training.find();
        res.status(200).json(trainings);
    }   catch (err) {
        res.status(400).json({error: err.message});

    }
};

exports.getTrainingsById = async (req, res) => {
    try {
        const training = await Training.findById(req.params.id);
        if (!training) {
            return res.status(404).json({error: 'Training not found'});
        }
        res.status(200).json(training);
    }   catch (err) {
        res.status(400).json({error: err.message});
    }
};


exports.updateTraining  = async (req, res) => {
    try {
        const training = await Training.findByIdAndUpadte(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!training) {
            return res.status(404).json({ error: 'Training not found'});
        }
        res.status(200).json(training);
    }   catch (err) {
        res.status(400).json({ error: err.message});
    
    }
};

exports.deleteTraining = async (req, res) => {
    try {
        const training = await Training.findByIdAndDelete(req.params.id);
        if (!training) {
            return res.status(404).json({ error: 'Training not found'});
        }
        res.status(200).json({message: 'Training deleted'});
    }   catch (err) {
        res.status(400).json({ error: err.message});
    }
};

