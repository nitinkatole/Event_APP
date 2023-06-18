const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  tagline: {
    type: String,
    required: true
  },
  schedule: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  files: {
    type: [String],
    required: true
  },
  moderator: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  sub_category: {
    type: String,
    required: true
  },
  rigor_rank: {
    type: Number,
    required: true
  },
  attendees: {
    type: [String],
    required: true
  }
});

module.exports=mongoose.model("events",events)
