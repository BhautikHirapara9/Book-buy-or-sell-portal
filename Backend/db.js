const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/bookbecho2"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;