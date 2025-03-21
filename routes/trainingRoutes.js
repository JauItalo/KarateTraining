
const express = require('express');
const trainingController = require('../controllers/trainingController');



const router = express.Router();


router.post('/', trainingController.createTraining);
router.get('/', trainingController.getTrainings);
router.get('/:id', trainingController.getTrainingsById);
router.put('/id', trainingController.updateTraining);
router.delete('/id', trainingController.deleteTraining);

module.exports = router;