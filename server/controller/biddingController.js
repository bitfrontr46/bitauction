const biddingSchema = require("../models/biddingSchema");

exports.bidding = (req, res) => {
  biddingSchema.countDocuments(
    { requestId: req.body.requestId },
    (err, ctn) => {
      console.log(ctn);
      if (err) console.log(err);
      if (ctn >= 10) {
        res.json({ result: "경매 마감" });
      } else {
        biddingSchema.create(req.body, (err) => {
          if (err) console.log(err);
          res.json({
            result: "입찰 완료",
          });
        });
      }
    }
  );
};

exports.ctn = (req, res) => {
  console.log(req.query);
  biddingSchema.countDocuments({ requestId: req.query.id }, (err, ctn) => {
    if (err) console.log(err);
    res.json({ ctn: ctn });
  });
};
