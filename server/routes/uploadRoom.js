const express = require("express");
const keys = require("../config/keys");
const passport = require("passport");
const multer = require('multer');
const fs = require("fs");
const path = require("path");
const Room = require("../models/Room");
const logger = require("../logger");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'routes/images');
    },

    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const imageFileFilter = (req, file, cb) => {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('You can upload only image files!'), false);
    }
    cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFileFilter});

const router = express.Router();

router.route('/')
.post(upload.single('image'), (req, res) => {

    // print(req.file);
    var obj = {
        description :req.body.description,
        roomType : req.body.roomType,
        height : req.body.height,
        width : req.body.width,
        price : req.body.price,
        image : {
            
            data : fs.readFileSync(path.join(__dirname + '/images/' + req.file.filename))
        }
    }

    Room.create(obj)
    .then((room) => {
        console.log('Room uploaded ', room);
        logger.info("Room uploaded successfully");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(room);
    }, (err) => next(err))
    .catch((err) => next(err));
})

module.exports = router;