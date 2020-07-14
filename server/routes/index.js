const express = require("express");
const router = express.Router();

const productController = require("../controller/productController");
const userController = require("../controller/userController");
const biddingController = require("../controller/biddingController");

router.post("/enroll", productController.enroll);
router.get("/list", productController.list);

router.post("/bidding", biddingController.bidding);
router.get("/ctn", biddingController.ctn);

router.post("/login", userController.login);
router.post("/join", userController.join);

module.exports = router;
