const mongoose = require('mongoose');
const { Schema } = mongoose;

const BooksSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name:{
        type: String
    },
    author:{
        type: String
    }, 
    edition:{
        type: String
    },
    publisher:{
        type: String
    },
    category:{
        type: String
    },
    priceonbook:{
        type: Number
    },
    sellprice:{
        type: Number
    },
    time:{
        type: Date,
        default: Date.now
    },
  });

  module.exports = mongoose.model('books', BooksSchema);