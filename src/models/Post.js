const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.export = mongoose.model('Post',PostSchema);