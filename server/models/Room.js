const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RoomSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  roomType: {
    type: String,
    enum: ['Small', 'Medium', 'Large'],
    required: true
  },
  height: {
    type: String,
    required: true
  },
  width: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    data: Buffer,
    contentType : String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Room = mongoose.model("Room", RoomSchema);