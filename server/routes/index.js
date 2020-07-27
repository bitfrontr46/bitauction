const express = require("express");
const router = express.Router();

<<<<<<< HEAD
const requestController = require('../controller/request')
const userController = require('../controller/user')
const biddingController = require('../controller/bidding')
const myPageController = require('../controller/myPage')
=======
const productController = require("../controller/productController");
const userController = require("../controller/userController");
const biddingController = require("../controller/biddingController");
>>>>>>> master

router.post("/enroll", productController.enroll);
router.get("/list", productController.list);

<<<<<<< HEAD
router.post('/enroll',requestController.enroll);
router.get('/list', requestController.list);
=======
router.post("/bidding", biddingController.bidding);
router.get("/ctn", biddingController.ctn);
>>>>>>> master

router.post("/login", userController.login);
router.post("/join", userController.join);

<<<<<<< HEAD
router.post('/myRequestList', myPageController.myRequestList);
router.post('/MyBiddingList', myPageController.MyBiddingList);

router.post('/login',userController.login);
router.post('/join',userController.join);
router.post('/myProfile',userController.myProfile);






module.exports = router;
=======
module.exports = router;
>>>>>>> master
