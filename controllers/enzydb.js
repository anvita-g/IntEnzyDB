const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const application  = express();

//const KineticsModel = mongoose.model("hydrolases_kinetics")
const KineticsModel = mongoose.model("kinetics_table")

router.get("/list",(req, res)=>{
    mongoose.pluralize(null);
    KineticsModel.find((err, docs) =>{
        console.log("no error")
        if (!err){
            console.log(docs)
            res.render('list', {data : docs})

         }
    }).lean();
});


router.get("/list/delete",(req, res)=>{
    var ObjectId = require('mongodb').ObjectID;
    const { resName } = req.query;
    console.log(resName);
    var myquery = {_id: new ObjectId(resName)};

    KineticsModel.deleteOne(myquery, function(err, obj) {
        if (!err){
            const msg = "1 document deleted";
            res.render('message', {data : msg});
        }
        else {
            const msg = "Error while deleting "+err;
            res.render('message', {data : msg});
            }
    });
});

router.get("/list/search",(req, res)=>{
    var ObjectId = require('mongodb').ObjectID;
    const { resName } = req.query;
    console.log(resName);
    var myquery = {_id: new ObjectId(resName)};

    KineticsModel.findOne(myquery, function(err, document){
        if (!err){
            res.render('list', {data : document});
        }
        else {
            const msg = "Error while searching.";
            res.render('message', {data : msg});
        }
    });
});

module.exports = router;