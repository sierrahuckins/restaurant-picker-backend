const express = require("express");
const mongoose = require("mongoose");

// Creating a server instance
const app = express();

// Telling the server to accept an incoming data in JSON format only
app.use(express.json());

// Connecting to MongoDB database
mongoose.connect(
    "mongodb://localhost:27017/restaurant", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

const PORT = 3000;

app.listen(PORT, () => console.log("Server started"));

// Importing the restaurant schema
const Restaurant = require("./models/Restaurant");

app.get("/restaurants", function (req, res) {
    // Finding all restaurants in the datbase
    Restaurant.find(function (err, restaurants) {
        if (err) {
            // If error occurs while getting documents, return error message
            return res.status(500).json({error: err.message});
        }
        // Else return restaurants
        res.status(200).json({restaurants: restaurants});
    });
});

app.post("/restaurants", function(req, res) {
    // Extracting data from req.body
    const { id, name, address} = req.body;

    // Creating a new Restaurant object
    const restaurant = new Restaurant({
        id: id,
        name: name,
        address: address,
    });

    // Saving the new Restaurant to the db
    restaurant.save(function (err, newRestaurant) {
        if (err) {
            // If error occurs while saving document, return the error message
            return res.status(500).json({ error: err.message });
        }
        //Else return message "Restaurant saved."
        res.status(200).json({ msg: "Restaurant saved."});
    });
});