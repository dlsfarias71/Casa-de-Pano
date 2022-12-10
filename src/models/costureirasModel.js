const mongoose = require("mongoose");

const CostureirasSchema = new mongoose.Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    fone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
   
    cooperativa: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "cooperativa"
    },

},
    {timestamp: true}


);


const costureira = mongoose.model("costureira", CostureirasSchema);

module.exports = costureira;