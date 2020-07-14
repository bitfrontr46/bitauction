let moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");
const requestModel = require("../models/requestSchema");

exports.enroll = async (req, res) => {
  const request = {
    ...req.body,
    uploadAt: moment().format("YYYY-MM-DD HH:mm:ss"),
  };

  await requestModel.create(request, function (err) {
    if (err) console.log(err);
    res.json({
      result: "작성 성공",
    });
  });
};

exports.list = (req, res) => {
  console.log("카테고리 : ", req.query.category);
  if (req.query.category === undefined) {
    requestModel.find({}, (err, data) => {
      let removeList = data.filter((obj) => {
        return new Date(obj.deadLine).getTime() > new Date().getTime();
      });
      if (err) return console.log(err);
      res.json(removeList);
    });
  } else {
    requestModel.find({ category: req.query.category }, (err, data) => {
      let removeList = data.filter((obj) => {
        return new Date(obj.deadLine).getTime() > new Date().getTime();
      });
      if (err) return console.log(err);
      res.json(removeList);
    });
  }
};
