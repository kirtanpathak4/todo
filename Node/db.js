const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const parameters = {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(
            "mongodb://localhost/todo",
            parameters
        );
        console.log("Database connection done successfully!");
    } catch (error) {
        console.log("Issue connecting the Database", error);
    }
};