const mongoose = require('mongoose')

const gallerySchema = new mongoose.Schema({
    category : {
        type : String,
        require : true,
    },
    photo : {
        data : Buffer,
       contentType : String,
    },
},{timestamps : true}
);

module.exports = mongoose.model('gallery',gallerySchema);