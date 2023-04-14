const mongoose = require("mongoose")
const vanSchema = mongoose.Schema({
vancolor: String,
vanmodel: String,
vanprice: Number
})
module.exports = mongoose.model("van",
vanSchema)