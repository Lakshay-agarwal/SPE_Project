const express = require("express");
const keys = require("../config/keys");
const passport = require("passport");
const multer = require('multer');
const fs = require("fs");
const path = require("path");
const Room = require("../models/Room");
const logger = require("../logger");

const router = express.Router();

class APIfeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    filtering() {
        const queryobj = { ...this.queryString };
        console.log(queryobj);
        const excludefields = ['page', 'sort', 'limit'];
        excludefields.forEach(el => delete queryobj[el]);
        
        let querystr = JSON.stringify(queryobj); 
        // console.log("the strigified version is " + querystr);
        querystr = querystr.replace(/\\/g, "");
        querystr = querystr.replace(/}"/g, "}");
        querystr = querystr.replace(/"{/g, "{");
        querystr = querystr.replace(/\b(gte|gt|lt|lte)\b/g, match => `$${match}`);
        // console.log("query string is " + querystr);
        this.query.find(JSON.parse(querystr));
        return this; 
    }
}

router.route('/')
.get(async (req, res) => {
    try {
        const features = new APIfeatures(Room.find(), req.query).filtering();

        const rooms = await features.query;
        
        // res.status(200).json({
        //     status: 'success',
        //     results: rooms.length,
        //     data: {
        //         rooms
        //     }
        // });
        logger.info("Search successful !");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(rooms)
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
        logger.error("ERROR !");
    }
});

module.exports = router;