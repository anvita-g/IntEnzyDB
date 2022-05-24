const express = require("express");
const mongoose = require("mongoose");
const {ObjectID: ObjectId} = require("mongodb");
const router = express.Router();
const application  = express();

//const KineticsModel = mongoose.model("hydrolases_kinetics")
const KineticsModel = mongoose.model("kinetics_table")
const StructureModel = mongoose.model("structure_chain_level_table")
const ReferenceModel = mongoose.model("reference_table")


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

    KineticsModel.find(myquery, function(err, document){
        if (!err){
            res.render('list', {data : document});
        }
        else {
            const msg = "Error while searching.";
            res.render('message', {data : msg});
        }
    }).lean();
});

router.get("/list/searchEC",(req, res)=>{
    var ObjectId = require('mongodb').ObjectID;
    const { resN } = req.query;
    console.log(resN);
    var myquery = {'ec_number': resN};

    KineticsModel.find(myquery, function(err, document){
        if (!err){
            res.render('list', {data : document});
        }
        else {
            const msg = "Error while searching.";
            res.render('message', {data : msg});
        }
    }).lean();
});

router.get("/list/searchUNIPROT",(req, res)=>{
    var ObjectId = require('mongodb').ObjectID;
    const { resN } = req.query;
    console.log(resN);
    var myquery = {'uniprot': resN};

    KineticsModel.find(myquery, function(err, document){
        if (!err){
            res.render('list', {data : document});
        }
        else {
            const msg = "Error while searching.";
            res.render('message', {data : msg});
        }
    }).lean();
});

router.get("/structure",(req, res)=>{
    mongoose.pluralize(null);
    StructureModel.find((err, docs) =>{
        console.log("no error")
        if (!err){
         //   console.log(docs)
            res.render('structure', {data : docs})

        }
    }).lean();
});

router.get("/reference",(req, res)=>{
    mongoose.pluralize(null);
    ReferenceModel.find((err, docs) =>{
        console.log("no error")
        if (!err){
            //   console.log(docs)
            res.render('reference', {data : docs})

        }
    }).lean();
});


router.get("/structure/searchEC",(req, res)=>{
    var ObjectId = require('mongodb').ObjectID;
    const { resN } = req.query;
    console.log(resN);
    var myquery = {'Ec_Number': resN};

    StructureModel.find(myquery, function(err, document){
        if (!err){
            res.render('list', {data : document});
        }
        else {
            const msg = "Error while searching.";
            res.render('message', {data : msg});
        }
    }).lean();
});

router.get("/structure/searchPDBID",(req, res)=>{
    var ObjectId = require('mongodb').ObjectID;
    const { resN } = req.query;
    console.log(resN);
    var myquery = {'PDB_ID': resN};

    StructureModel.find(myquery, function(err, document){
        if (!err){
            res.render('list', {data : document});
        }
        else {
            const msg = "Error while searching.";
            res.render('message', {data : msg});
        }
    }).lean();
});

router.get("/reference/searchEC",(req, res)=>{
    var ObjectId = require('mongodb').ObjectID;
    const { resN } = req.query;
    console.log(resN);
    var myquery = {'ec_number': resN};

    ReferenceModel.find(myquery, function(err, document){
        if (!err){
            res.render('list', {data : document});
        }
        else {
            const msg = "Error while searching.";
            res.render('message', {data : msg});
        }
    }).lean();
});

router.get("/reference/searchPDBID",(req, res)=>{
    var ObjectId = require('mongodb').ObjectID;
    const { resN } = req.query;
    console.log(resN);
    var myquery = {'PDB_ID': resN};

    ReferenceModel.find(myquery, function(err, document){
        if (!err){
            res.render('list', {data : document});
        }
        else {
            const msg = "Error while searching.";
            res.render('message', {data : msg});
        }
    }).lean();
});

router.get("/reference/searchUNIPROT",(req, res)=>{
    var ObjectId = require('mongodb').ObjectID;
    const { resN } = req.query;
    console.log(resN);
    var myquery = {'uniprot': resN};

    ReferenceModel.find(myquery, function(err, document){
        if (!err){
            res.render('list', {data : document});
        }
        else {
            const msg = "Error while searching.";
            res.render('message', {data : msg});
        }
    }).lean();
});

module.exports = router;
