const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You must have a name"],
    },
    image: {
        type: String,
        required: [true, "You must have an image URL"],
    },
    chests: {
        type: Number,
        required: [true, "You must have a number of treasure chests"],
    },
    phrase: {
        type: String,
        required: [true, "You must have a catch phrase"],
    },
    position: {
        type: String,
        required: [true, "You must have a position"],
        enum: {
            values: ["Captain", "First Mate", "Quarter Master", "Boatswain", "Powder Monkey"],
            message: "You must select a position from the dropdown"
        }
    },
    pegleg: {
        type: Boolean,
        required: [true, "You must tell us if you have a peg leg!"]
    },
    eyepatch: {
        type: Boolean,
        required: [true, "You must tell us if you have an eye patch!"]
    },
    hookhand: {
        type: Boolean,
        required: [true, "You must tell us if you have a hook hand!"]
    }
}, {timestamps: true})

const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;