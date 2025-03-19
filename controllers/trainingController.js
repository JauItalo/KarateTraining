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

