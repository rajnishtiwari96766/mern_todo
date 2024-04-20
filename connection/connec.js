const mongoose = require("mongoose");

const conn = async (req, res) => {
    await mongoose.connect("mongodb+srv://rajnish:rvt@123@cluster0.bxl0ouw.mongodb.net/", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to MongoDB");
}

conn();
