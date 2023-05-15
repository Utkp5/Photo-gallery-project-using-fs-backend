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
        if (photo.size > 100000) {
            return res.status(401).send(`Image size should be less then 1mb `);
        }

        const created = new galleryModel(req.fields);

        if (photo) {
            created.photo.data = fs.readFileSync(photo.path);
            created.photo.contentType = photo.type;

            const final = await created.save();
            return res.status(200).send({message : `uploaded successfully`,final});
        }


    } catch (error) {
        console.log(error)
    }
}


//getsingle
const getPhoto = async(req,res) => {
    try {
        
        const _id = req.params.id

        const getall = await galleryModel.findById({_id});

        if (!getall) {
            return res.status(400).send(`No data found`);
        }

        return res.status(200).send(getall);
        

    } catch (error) {
        console.log(error)
    }
}


//getall
const getPhotos = async(req,res) => {
    try {

        const getall = await galleryModel.find({});

        if (!getall) {
            return res.status(400).send(`No data found`);
        }

        return res.status(200).send(getall);
        
    } catch (error) {
        console.log(error)
        
    }
}


//getphoto only
const getPhotosOnly = async(req,res) => {

    try {

        const getphoto = await galleryModel.findById(req.params.pid).select('photo');

        if (getphoto.photo.data) {

            res.set("Content-type", getphoto.photo.contentType);
            return res.status(200).send(getphoto.photo.data);
        }

        return res.status(200).send(getphoto);
    } catch (error) {
        
    }
}



//update
const updatePhoto = async(req,res) => {

    try {
        const id = req.params._id;

        const update = await galleryModel.findById(id);

        if (!update) {
            return res.status(400).send(`No data found`);
        }

        const data = {
            photo : req.files,
            category : req.fields
        }
        
        const final = await galleryModel.findByIdAndUpdate(id, data, {new:true});

        return res.status(200).send(final);
        
    } catch (error) {
        console.log(error)
        
    }
}


//delete
const deletePhoto = async(req,res) => {

    try {

        const id = req.params.id;

        const del = await galleryModel.findById(id);

        if (!del) {
            return res.status(400).send(`No data found`);
        }

                
        const final = await galleryModel.findByIdAndDelete(id);

        if (final) {
            return res.status(200).send(`deleted successfully`);
        }
        
    } catch (error) {
        console.log(error)
        
    }
}


module.exports = {addPhoto,getPhoto,getPhotos,updatePhoto,deletePhoto, getPhotosOnly};