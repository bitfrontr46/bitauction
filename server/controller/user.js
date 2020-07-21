const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.login = (req,res) => {
    User.findOne({userEmail : req.body.userEmail})
    .then(user => {
        if(user.userEmail === req.body.userEmail){
            bcrypt.compare(req.body.userPassword, user.userPassword, (err, istrue) => {
                if(istrue) {
                    res.json({authentication : true, result : '로그인 성공', user_id : user._id, is_seller : user.is_seller, userName : user.userName});
                } else {
                    res.json({authentication : false, result : '비밀번호가 다릅니다.'});
                } 
              });
        }
    })
    .catch((err) => {
        res.json({authentication : false, result : '존재하지않는 아이디입니다...'});
    })
}




exports.join = async (req,res) => {
    let pwd;
    console.log(req.body);
   await bcrypt.hash(req.body.userPassword, 10)
   .then(hash=>{
       pwd = hash;
   })
   .catch(err => {
       console.log(err);
   })
   await User.create({...req.body, userPassword : pwd},function(err){
        if(err){
            console.log(err);
            return res.json({result : '이미 가입되어 있습니다.'});  
        } 
        res.json({result : '회원가입 완료', is_join : true})
    })
}