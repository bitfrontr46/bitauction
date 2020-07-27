const express = require('express');
const router = express.Router();

const requestController = require('../controller/request')
const userController = require('../controller/user')
const biddingController = require('../controller/bidding')
const myPageController = require('../controller/myPage')


router.post('/enroll',requestController.enroll);
router.get('/list', requestController.list);

router.post('/bidding', biddingController.bidding);
router.get('/ctn', biddingController.ctn);

router.post('/myRequestList', myPageController.myRequestList);
router.post('/MyBiddingList', myPageController.MyBiddingList);

router.post('/login',userController.login);
router.post('/join',userController.join);
router.post('/myProfile',userController.myProfile);






module.exports = router;