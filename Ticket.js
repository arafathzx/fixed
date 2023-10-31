const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  guildID: {
    type: String,
    required: true
  },
  ticketCount: {
    type: Number,
    required: true
  },
  channelID: {
    type: String,
    required: true
  },
  userID: {
    type: String,
    required: true
  },
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
