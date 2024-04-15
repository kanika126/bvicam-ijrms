const mongoose = require('mongoose');
const mongoURL = "mongodb+srv://kanika12602:Q20QaVJplrSL4Jrg@cluster0.o8sdgn1.mongodb.net/"
const connectToMongo = () => {
    mongoose.connect(mongoURL, () => {
        console.log("Connected to Mongo Successfully");
    })
}
module.exports = connectToMongo;