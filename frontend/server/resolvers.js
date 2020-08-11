const User = require('./models/user');
const Profile = require('./models/profile');
const Request = require('./models/request');
const Bid = require('./models/bid');
const Room = require('./models/room');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId.isValid;

const resolvers = {
    Query: {
        getAllUsers: () => {
            const result = User.find();
            return result
        },

        getUser: (root, args) => {
            const result = User.findOne({ email: args.email })
            return result;
        },

        getProfile: (root, args) => {
            if(ObjectId(args.user)){
                const result = Profile.findOne({ user: args.user }).populate('user', 'name email');
                return result;
            }
        },

        getAllRequests: () => {
            const result = Request.find().populate('author', '_id name')
                .then(requests => {
                    const request = requests.filter((obj) => {
                        return obj.state === '요청 진행중'
                    })
                    const removeList = request.filter((obj) => {
                        return new Date(obj.deadLine).getTime() > new Date().getTime();
                    })
                    return removeList
                })
                .catch(err => {
                    console.log(err);
                })
            return result;
        },

        getMyRequests: (root, args) => {
            if(ObjectId(args.author)){
                const result = Request.find({ author: args.author }).populate('author', 'name')
                    .then((res) => {
                        return res
                    })
                    .catch(err => {
                        console.log('User에러1',err);
                    })
                return result;
            }
        },

        getMyBids: (root, args) => {
            if(ObjectId(args.author)){
                const result = Bid.find({ author: args.author }).populate({
                    path: 'request',
                    populate: { path: 'author', select: 'name email' }
                })
                    .then((res) => {
                        return res
                    })
                    .catch(err => {
                        console.log('Seller에러2',err);
                    })
                return result;
            }
        },

        getBidsInRequest: (root, args) => {
            if(ObjectId(args.request)){
                const result = Bid.find({ request: args.request }).populate('author', '_id name');
                return result;
            }
        },

        getMyRoom: (root, args) => {
            const result = Room.findOne({ request: args.request, seller: args.seller })
            return result;
        },

        getMyRoomListForSeller: (root, args) => {
            if(ObjectId(args.seller)){
                const result = Room.find({ seller: args.seller })
                    .populate({
                        path: 'request',
                        select: '_id author category',
                        populate: { path: 'author', select: '_id name' }
                    })
                    .populate('seller', '_id name');
                return result;
            }
        },
    },

    Mutation: {
        login: (root, args) => {
            const result = User.findOne({ email: args.email })
                .then(async user => {
                    const str = bcrypt.compare(args.pwd, user.pwd)
                        .then((is_true) => {
                            if (is_true) {
                                return {
                                    _id: user._id,
                                    name: user.name,
                                    email: user.email,
                                    is_seller: user.is_seller,
                                    result: '로그인 성공',
                                }
                            } else {
                                throw new Error();
                            }
                        })
                        .catch(err => {
                            throw new Error();
                        })
                    return str;
                })
                .catch(err => {
                    return { result: '이메일 혹은 비밀번호가 다릅니다..' }
                })
            return result;
        },

        signUp: async (root, args) => {
            let pwd;
            await bcrypt.hash(args.input.pwd, 10)
                .then(hash => {
                    pwd = hash;
                })
                .catch(err => {
                    console.log(err);
                })
            const result = await User.create({ ...args.input, pwd })
                .then(() => {
                    return true;
                })
                .catch((err) => {
                    console.log(err);
                    return false;
                })
            return result;
        },

        saveProfile: (root, args) => {
            const result = Profile.create(args.input)
                .then(() => {
                    return true;
                })
                .catch((err) => {
                    console.log(err);
                    return false;
                })
            return result;
        },

        sendRequest: (root, args) => {
            const req = {
                ...args.input,
                requestedAt: new Date().toISOString().slice(0, 10),
                state: '요청 진행중',
            }
            const result = Request.create(req)
                .then(() => {
                    return true;
                })
                .catch((err) => {
                    console.log(err);
                    return false;
                })
            return result;
        },

        sendBid: (root, args) => {
            const result = Bid.findOne({ request: args.input.request, author: args.input.author })
                .then(data => {
                    if (data === null) {
                        const str = Bid.create(
                            {
                                ...args.input,
                                state: '거래 대기중',
                            }
                        )
                            .then((data) => {
                                const now = new Date().toTimeString().substr(0, 8);
                                const req = {
                                    request: args.input.request,
                                    seller: args.input.author,
                                    messages: [{
                                        room: data._id,
                                        name: 'system',
                                        message: `고객님의 요청에 대한 전문가의 제시 금액 : ${args.input.price}원 입니다. 전문가와 상담하실 수 있습니다!`,
                                        createdAt: now,
                                    }]
                                }
                                Room.create(req);
                                return '전송 완료'
                            })
                            .catch((err) => {
                                console.log(err);
                                return '에러'
                            })
                        return str
                    } else {
                        return '이미 전송하였습니다.'
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
            return result;
        },

        choiceOneBid: (root, args) => {
            const result1 = Bid.updateOne({ _id: args.bid }, { $set: { state: '거래 진행중' } })
                .then(() => {
                    console.log('Bid update');
                    return true
                })
                .catch((err) => {
                    console.log(err);
                    return false
                })
            const result2 = Bid.updateMany({ request: args.request, _id: { $ne: args.bid } }, { $set: { state: '유찰' } })
                .then(() => {
                    console.log('other Bid delete');
                    return true
                })
                .catch((err) => {
                    console.log(err);
                    return false
                })
            const result3 = Request.updateOne({ _id: args.request }, { $set: { state: '거래 진행중' } })
                .then(() => {
                    console.log('Request update');
                    return true
                })
                .catch((err) => {
                    console.log(err);
                    return false
                })
            return (result1 && result2 && result3);
        },

        tradeComplete: (root, args) => {
            const result1 = Bid.updateOne({ _id: args.bid }, { $set: { state: '거래 완료' } })
                .then(() => {
                    console.log(args);
                    console.log('Bid complete');
                    return true
                })
                .catch((err) => {
                    console.log(err);
                    return false
                })
            const result2 = Request.updateOne({ _id: args.request }, { $set: { state: '거래 완료' } })
                .then(() => {
                    console.log('Request complete');
                    return true
                })
                .catch((err) => {
                    console.log(err);
                    return false
                })
            return (result1 && result2);
        },

        tradeCancle: (root, args) => {
            const result1 = Room.deleteMany({ request: args.request })
                .then(() => {
                    console.log('all Room delete');
                    return true
                })
                .catch((err) => {
                    console.log(err);
                    return false
                })
            const result2 = Bid.updateMany({ request: args.request }, { $set: { state: '취소된 거래' } })
                .then(() => {
                    console.log('all Bid cancle');
                    return true
                })
                .catch((err) => {
                    console.log(err);
                    return false
                })
            const result3 = Request.updateOne({ _id: args.request }, { $set: { state: '취소된 거래' } })
                .then(() => {
                    console.log('Request update');
                    return true
                })
                .catch((err) => {
                    console.log(err);
                    return false
                })
            return (result1 && result2 && result3);
        },

        bidCancle: (root, args) => {
            const result1 = Room.deleteOne({ request: args.request, seller: args.author })
                .then(() => {
                    console.log('Room delete');
                    return true
                })
                .catch((err) => {
                    console.log(err);
                    return false
                })
            const result2 = Bid.updateOne({ request: args.request, author: args.author }, { $set: { state: '취소된 거래' } })
                .then(() => {
                    console.log('bid cancle');
                    return true
                })
                .catch((err) => {
                    console.log(err);
                    return false
                })
            return (result1 && result2);
        },

        sendNewMessage: async (root, args, { pubsub }) => {
            const now = new Date().toTimeString().substr(0, 8);
            const chat = await {
                room: args.input.room,
                name: args.input.name,
                message: args.input.message,
                createdAt: now,
            }
            Room.updateOne({ _id: args.input.room }, { $push: { messages: chat } })
                .then(() => {
                    pubsub.publish(`${args.input.room}`, chat)
                })
                .catch(err => {
                    console.log(err);
                })
            return chat;
        }
    },

    Subscription: {
        newMessage: {
            subscribe: (root, args, { pubsub }) => {
                return pubsub.asyncIterator(`${args.room}`)
            },
            resolve: (payload) => {
                return payload;
            }
        }
    }
}

module.exports = resolvers;