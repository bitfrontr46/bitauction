const { GraphQLServer,PubSub } = require('graphql-yoga');
const pubsub = new PubSub();
const resolvers = require('./resolvers');
const mongoose = require('mongoose');
const dev = require('./config/dev');

mongoose.connect(dev.mongoURI,
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

server.start(() => console.log('http://localhost:4000'))