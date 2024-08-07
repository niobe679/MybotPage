const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema 
const TransportSchema = new Schema({
    StartingPoint: {
        type: String,
        required: true
    },
    Destination: {
        type: String,
        require: true
    },
    Cost: {
        type: Number
    }
});
module.exports = Transport = mongoose.model('Transport', TransportSchema);