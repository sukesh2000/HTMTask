var mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
    user:{
        type: String,
        required: true
    },
    progress:{
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    course:{
        type: String,
        required: true
    }
})

module.exports = Data = mongoose.model('DataSchema',DataSchema);