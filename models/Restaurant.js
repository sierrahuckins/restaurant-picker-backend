const mongoose = require("mongoose");

// Describing the structure (schema) of the data to be stored
const RestaurantSchema = new mongoose.Schema({
    id: Number,
    name: String,
    address: String
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);