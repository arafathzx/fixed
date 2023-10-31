const mongoose = require("mongoose");

const warningSchema = new mongoose.Schema({

  userId: { type: String, required: true },

  reason: { type: String, required: true }

});

module.exports = mongoose.model("Warning", warningSchema); 


