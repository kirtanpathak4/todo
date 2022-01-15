const express = require("express");
const Model = require("../models/model");

const router = express.Router();

//GET - Request for all TODO's
router.get("/", async (req, res) => {
    try {
        const getAllTodo = await Model.find();
        res.send(getAllTodo);
    } catch (error) {
        res.send(error);
    }
});


//POST - Request to add new TODO
router.post("/", async (req, res) => {
    try {
        const newTodo = await new Model(req.body).save();
        res.send(newTodo);
    } catch (error) {
        res.send(error);
    }
});

//DELETE - Request to delete a TODO
router.delete("/:id", async (req, res) => {
    try {
        const deleteTodo = await Model.findByIdAndDelete(req.params.id);
        res.send(deleteTodo);
    } catch (error) {
        res.send(error);
    }
});


module.exports = router;