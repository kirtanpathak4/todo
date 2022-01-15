const express = require("express");
const Model = require("../models/model");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const newTodo = await new Model(req.body).save();
        res.send(newTodo);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;