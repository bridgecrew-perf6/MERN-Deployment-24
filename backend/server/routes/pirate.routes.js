//defines routes, points to function in controller

const PirateController = require("../controllers/pirate.controller");
const Pirate = require("../models/pirate.model")

module.exports = app => {
    app.get("/api/pirates/findAll", PirateController.findAll);
    app.post("/api/pirates/create", PirateController.createPirate );
    app.get("/api/pirates/:_id", PirateController.findOne);
    app.delete("/api/pirates/:_id", PirateController.deleteOne);
    app.patch("/api/pirates/:_id/edit", PirateController.updateOne);
}