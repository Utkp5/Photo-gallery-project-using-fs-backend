const express = require('express');
const { addPhoto, getPhoto, getPhotos, updatePhoto, deletePhoto } = require('../controllers/photoC');
const router = express.Router();


//add photo
router.post('/add-photo', addPhoto);

//get photo
router.get('/get-photo', getPhoto);

//get all photos
router.get('/get-all-photo', getPhotos);

//update-photo
router.put('/update-photo', updatePhoto);

//delete photo
router.delete('/delete-photo', deletePhoto);


module.exports = router;