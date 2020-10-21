const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
    joke: {
        type: String,
        required: true,
        min: [10, 'minimum 10']
    },
    nick: {
        type: String,
        required: true,
        min: 5
    },
    posted: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('JokesNew', jokeSchema);