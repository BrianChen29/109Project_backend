var express = require('express');
var router = express.Router();
var event = require('../models/event');
var multer = require('multer');

//event List
//取得
router.get('/getAllevents', function(req, res){
    event.find({}, (err, allevent) => {
        //res.render('event',{ title: '109 Project', allevent : allevent });
        if(err) res.send(err);
        else{
            res.json(allevent);
            console.log(allevent);
        }
    })
});

router.get('getOneevents/:evename', function(req, res){
    event.findOne({ eveName: req.params.evename }, (err, event) => {
        //res.render('event', {title: '109 Project' , allevent : allevent });
        if(err) res.send(err);
        else{
            res.json(event);
        }
    })
});

router.get("getOneevents/:memname", function(req, res){
    event.findOne({ memname: req.params.eveHelperName }, (err, event) => {
        if(err) res.send(err);
        else{
            res.json(event);
        }
    })
});

router.get("getOneevents/:memname", function(req, res){
    event.findOne({ memname: req.params.eveIssuerName }, (err, event) => {
        if(err) res.send(err);
        else{
            res.json(event);
        }
    })
});

router.get('/createevent', function(req, res){
    event.find({}, (err, allevent) => {
        res.render('addevent', { title: '109 Project', allevent : allevent});
    })
});

//新增資料
router.post('/createevent', function(req, res, next){
    const evename = req.body.evename;
    const issname = req.body.issname;
    const helpname = req.body.helpname;
    const state = req.body.evestate;
    const type = req.body.evetype;
    const loc = req.body.loc;
    const date = req.body.date;


    event.create({ eveName: evename, issName: issname, helpName: "", eveState: false, eveType: type, eveLoc: loc, eveDate: date},(err)=>{
        if(err){
            console.log(err);
            res.send(err);
        }

        else{
            res.json({
                status: "success",
                message: "create event successfully!",
                body: req.body,
            })
        }
    });
});

//更新
router.put('/updateevent/:evename', function(req, res){
    event.updateOne({ eveName: req.params.evename }, req.body )
    .catch((error) => {
        res.status(200).json({
            status: "error",
            message: "update error!",
        });
        console.log(error);
    })
    .then((event) => {
        res.status(200).json({
            status: "success",
            message: "update event successfully!",
            event: event,
        });
    });
});

//刪除
router.delete('/deleteevent/:evename', function(req, res){
    event.deleteOne({ eveName: req.params.evename })
    .catch((error) => {
        res.status(200).json({
            status: "error",
            message: "delete failed!",
        });
        console.log(error);
    })
    .then(() => {
        res.status(200).json({
            status: "success",
            message: "delete successfully!",
        });
    });
});

module.exports = router;
