const mongoose = require('mongoose')

let Schema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    country: {
        type: String,
        required: true
    },

    power: {
        type: [String],
        default: undefined
    },

    level: {
        type: Number,
        default: 100
    }

})

let HeroesModel = mongoose.model('heroe', Schema)

module.exports = HeroesModel