const mongoose = require('mongoose')
const mongoURI = "mongodb://localhost:27017/passwordmaneger"


const connectToMongo = () => {
    mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => console.error('Failed to connect to MongoDB', err));
};

module.exports = connectToMongo;
