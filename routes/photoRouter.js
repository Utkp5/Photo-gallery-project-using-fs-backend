const express = require('express')
const router = express.Router();


//add photo
router.post('/add-photo', addPhoto);

//get photo
router.get('/get-photo', addPhoto);

//get all photos
router.get('/get-all-photo', addPhoto);

//update-photo
router.put('/update-photo', addPhoto);

//delete photo
router.delete('/delete-photo', addPhoto);


module.exports = router;