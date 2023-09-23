const mongoose = require('mongoose');
// Event Schema
const eventSchema = new mongoose.Schema({
    title : {
        type : String , 
        required : true
    },
    price : {
        type : Number , 
        default : 400
    },
    description : {
        type : String , 
        required : true
    }
})

//Create Our Model
const Event = mongoose.model('Event' , eventSchema);

//Export Model
module.exports = Event;