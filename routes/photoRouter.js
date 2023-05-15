const express = require('express');
const { addPhoto, getPhoto, getPhotos, updatePhoto, deletePhoto, getPhotosOnly } = require('../controllers/photoC');
const router = express.Router();
const formidable = require('express-formidable')


//add photo
router.post('/add-photo', formidable(), addPhoto);

//get photo
router.get('/get-photo/:id', getPhoto);

//get all photos
router.get('/get-all-photo', getPhotos);

//get-photo-only
router.get('/get-photo-only/:pid', getPhotosOnly);

//update-photo
router.put('/update-photo/:_id', updatePhoto);

//delete photo
router.delete('/delete-photo/:id', deletePhoto);


module.exports = router;