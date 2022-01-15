const mongoose = require("mongoose");

module.exports = async () => {
    try {
        await mongoose.connect(
            "mongodb://localhost/todo"
        );
        console.log("Database connection done successfully!");
    } catch (error) {
        console.log("Issue connecting the Database", error);
    }
};