const express = require('express');
const router = express.Router();

const requestController = require('../controller/request')
const userController = require('../controller/user')
const biddingController = require('../controller/bidding')


router.post('/enroll',requestController.enroll);
router.get('/list', requestController.list);

router.post('/bidding', biddingController.bidding);
router.get('/ctn', biddingController.ctn);
router.post('/biddingList', biddingController.list);

router.post('/login',userController.login);
router.post('/join',userController.join);






module.exports = router;