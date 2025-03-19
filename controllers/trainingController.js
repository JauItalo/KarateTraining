const training = require('../models/training');

exports.createTraining = async (req, res) => {
    try{
        const newTraining = new training(req, body);
        await newTraining.save();
        res.status(201).json(newTraining);
    }   catch (err) {
        res.status(400).json({ error: err.message});
    }
};

exports.getTrainings = async (req, res) => {
    try {
        const trainings = await training.find();
        res.status(200).json(trainings);
    }   catch (err) {
        res.status(400).json({error: err.message});

    }
};

