const mongoose = require("mongoose")
const vanSchema = mongoose.Schema({
vancolor: String,
vanmodel: {type:String},
vanprice: {type: Number,
min: 100,
max: 10000,
required: true},
//Author:{type:String},
})
module.exports = mongoose.model("van",vanSchema)