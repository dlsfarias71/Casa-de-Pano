const mongoose = require("mongoose");

const CooperativaSchema = new mongoose.Schema({

  _id: { type: mongoose.Schema.Types.ObjectId,
               default:mongoose.Types.ObjectId 
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
  }
});


const cooperativa = mongoose.model("cooperativa", CooperativaSchema);

module.exports = cooperativa;