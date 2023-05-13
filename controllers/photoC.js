const galleryModel = require('../model/photoM');
const fs = require('fs');

//add
const addPhoto = async(req,res) => {

    try {
        
        const {category} = req.fields;
        const {photo} = req.files;

        if (!category || !photo) {
            return res.status(401).send(`Something u are missing`);
        }
        if (photo.size > 1000000) {
            return res.status(401).send(`Image size should be less then 1mb `);
        }

        const created = new galleryModel();
        console.log(created);

        if (photo) {
            created.photo.data = fs.readFileSync(image.path);
            created.photo.contentType = image.type;
        }
        const final = await created.save();

        return res.status(200).send(`uploaded successfully`,final);



    } catch (error) {
        console.log(error)
        
    }
}


//getsingle
const getPhoto = async(req,res) => {
    try {
        
    } catch (error) {
        console.log(error)
        
    }
}


//getall
const getPhotos = async(req,res) => {
    try {
        
    } catch (error) {
        console.log(error)
        
    }
}


//update
const updatePhoto = async(req,res) => {
    try {
        
    } catch (error) {
        console.log(error)
        
    }
}


//delete
const deletePhoto = async(req,res) => {
    try {
        
    } catch (error) {
        console.log(error)
        
    }
}


module.exports = {addPhoto,getPhoto,getPhotos,updatePhoto,deletePhoto};