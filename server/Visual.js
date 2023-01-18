const mongoose = require("mongoose")
const visualSchema = mongoose.Schema({
    intensity : {
        type:Number
    },
    sector:{
        type:String
    },
    country:{
        type:String
    }
})

const visualModel = mongoose.model("VisualData",visualSchema)
module.exports = visualModel