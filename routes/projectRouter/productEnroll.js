var express  = require('express');
var router = express.Router();
var moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");


const requestModel = require('../../model/projectSchema/requestSchema');

router.post('/Enroll', async (req,res)  => {
    /*
    
let requestSchema = mongoose.Schema({
    title : {type:String, required:true},
    userId : {type:String, required:true}, 
    detail : {type:String, required:true},
    category : {type:String, required:true},
    uploadAt : {type:String, required:true},
    deadLine : {type:String, required:true},
    tags :[{tag : String}]
});
    
    */


    
    let request =  new requestModel();
    console.log();
    const tags = req.body.tags;
    request.userId = req.body.id;
    request.detail = req.body.detail;
    request.title = req.body.title;
    request.category = req.body.category;
    request.createdAt = moment().format('YYYY-MM-DD HH:mm:ss'); 
    request.deadLine = req.body.deadLine;
    request.tags = tags;

    await  requestModel.create(request , function (err, contact) {
        
        if (err) console.log(err);
        
        console.log(contact);
        
        res.json({
          rs : "작성 성공"
        })
    });

})


 
 
module.exports = router;


