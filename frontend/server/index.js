const { GraphQLServer,PubSub } = require('graphql-yoga');
const pubsub = new PubSub();
const resolvers = require('./resolvers');
const mongoose = require('mongoose');
const {upload,upload2} = require('./imageUpload');
const cors = require('cors');


mongoose.connect("mongodb+srv://testDB:1234567890@cluster0-3zzdx.mongodb.net/graph?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })

mongoose.connection.on('open',()=>{
    console.log('DB Connected');
})

const server = new GraphQLServer({
    typeDefs : './server/schema.graphql',
    resolvers,
    context : {pubsub},
})

server.express.use(cors());

server.express.post('/image' ,upload.fields([{name:'profileImage'},{name:'exampleImages'}]), (req,res,next) => {
    console.log('req',req.files);
})

server.start(() => console.log('http://localhost:4000'))