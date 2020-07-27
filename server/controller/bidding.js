const biddingSchema = require('../models/bidding');
const requestModel = require('../models/request');
const roomModel = require('../models/Chat/room');
const chatModel = require('../models/Chat/chat');

exports.bidding = (req, res) => {
    biddingSchema.countDocuments({ request_id: req.body.request_id }, (err, Allctn) => {
        if (err) console.log(err);
        biddingSchema.countDocuments({ request_id: req.body.request_id, user_id: req.body.user_id }, (err, ctn) => {
            if (ctn === 0) {
                if (Allctn >= 10) {
                    res.json({ result: "경매 마감" })
                } else {
                    biddingSchema.create(req.body, (err) => {
                        if (err) console.log(err);
                        const roomName = `${req.body.request_id}/${req.body.user_id}`
                        roomModel.create({ request_id: req.body.request_id, user_id: req.body.user_id , roomName : roomName })
                            .then((data) => {
                                let now = new Date().toTimeString().substr(0, 8);
                                let realData = {
                                    roomName: roomName,
                                    userName: req.body.userName,
                                    message: `${req.body.userName}님이 총 금액 ${req.body.price} 원을 제시하였습니다!`,
                                    created: now,
                                    read: false }
                                chatModel.create(realData)
                                    .then(() => {
                                        res.json({
                                            result: "입찰 완료"
                                        })
                                    })
                                    .catch(err => {
                                        console.log(err);
                                    })
                            })
                            .catch((err) => {
                                console.log(err);
                            })
                    })
                }
            } else {
                res.json({
                    result: "이미 입찰하였습니다"
                })
            }
        })
    })
}


exports.ctn = (req, res) => {
    biddingSchema.countDocuments({ request_id: req.query.request_id }, (err, ctn) => {
        if (err) console.log(err);
        if (ctn === 10) {
            requestModel.update({ _id: req.query.request_id }, { $set: { state: '경매 마감' } })
                .then(() => {
                    console.log('마감');
                })
                .catch(err => {
                    console.log(err);
                });
        }
        res.json({ ctn: ctn })
    })
}
