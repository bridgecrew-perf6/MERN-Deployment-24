//import pirate model
const Pirate = require("../models/pirate.model");

//function to test connection
module.exports.testResponse = (req,res) => {
    res.json({message: "test response here!"})
}

//function to find all
module.exports.findAll = (req,res) => {
    Pirate.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "that didn't quite work", err}))
}

//function to create new pirate
module.exports.createPirate = (req,res) => {
    Pirate.create(req.body)
        .then(newPirate => res.json(newPirate))
        .catch(err => res.status(400).json({message: "that didn't quite work", err}))
}

//function to find one by ID
module.exports.findOne = (req, res) => {
    Pirate.findOne({_id: req.params._id})
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message: "that didn't quite work", err}))
}

//function to delete one by ID
module.exports.deleteOne = (req, res) => {
    Pirate.deleteOne({_id: req.params._id})
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message: "that didn't quite work", err}))
}

//function to update one
module.exports.updateOne = (req,res) => {
    Pirate.updateOne({_id: req.params._id}, req.body, {runValidators: true})
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message: "that didn't quite work", err}))
}

