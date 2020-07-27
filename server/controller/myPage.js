const biddingSchema = require('../models/bidding');
const requestModel = require('../models/request');

exports.MyBiddingList = (req, res) => {
    biddingSchema.find({ user_id: req.body.user_id })
        .populate({
            path: 'request_id',
            populate: { path: 'user_id', select: 'userName' }
        })
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            console.log(err);
        })
}

exports.myRequestList = (req, res) => {
    console.log('user_id 하하',req.body.user_id);
    requestModel.find({ user_id: req.body.user_id })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err);
        })
}