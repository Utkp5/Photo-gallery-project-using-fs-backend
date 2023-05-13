const mongoose = require('mongoose')

const gallerySchema = new mongoose.Schema({
    category : {
        type : String,
        required : true,
    },
    photo : {
        data : Buffer,
        required : true,
    },
},{timestamps : true}
);

module.exports = mongoose.model('gallery',gallerySchema);