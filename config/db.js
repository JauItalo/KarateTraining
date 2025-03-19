const mongoose = require('mongoose');

const conncetDB = async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017/karate-training',
{
            useNewUrlParser: true,
            useUnifiedTopology: true,


    });
    console.log('MongoDB conneceted');
    } catch (err) {
        console.error('MongoDB conncection error:', err);
        process.exit(1);
    }
};

module.exports = conncetDB;