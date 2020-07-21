const biddingSchema = require('../models/bidding');

exports.bidding = (req,res) => {
    biddingSchema.countDocuments({what : req.body.what},(err,ctn)=>{
        console.log(ctn);
        if(err) console.log(err);
        if(ctn >= 10){
            res.json({result : "경매 마감"})
        } else {
            biddingSchema.create(req.body,(err)=>{
                if (err) console.log(err);
                res.json({
                    result : "입찰 완료"
                })
            })
        }
    })
}

exports.ctn = (req,res) => {
    biddingSchema.countDocuments({what : req.query.id},(err,ctn)=>{
        console.log('query', req.query);
        console.log('ctn', ctn);
        if(err) console.log(err);
        res.json({ctn : ctn})
    })
}

exports.list = (req,res) =>{
    biddingSchema.find({author : req.body.userID})
    .populate('author','userEmail')
    .then(data =>{
        console.log(data);
        res.json(data)
    })
    .catch(err=>{
        console.log(err);
    })
}