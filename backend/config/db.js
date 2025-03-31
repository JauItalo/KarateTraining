const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://host.docker.internal:27017/karate-training', {
            retryWrites: true,
            w: 'majority',
            serverSelectionTimeoutMS: 5000,  // 5 segundos para timeout
            socketTimeoutMS: 45000          // 45 segundos para socket timeout
        });
        console.log('✅ MongoDB connected successfully to Docker container');
    } catch (err) {
        console.error('❌ MongoDB connection error:', err.message);
        console.log('\nDica: Verifique se:');
        console.log('1. O container MongoDB está rodando: docker ps');
        console.log('2. A porta 27017 está liberada no firewall');
        console.log('3. O nome do host está correto (host.docker.internal para Docker)');
        process.exit(1);
    }
};

module.exports = connectDB;