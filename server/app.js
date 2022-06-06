const express = require('express');
const {} = require('apollo-server-express')

// Load schema & resolvers
const typeDefs = require('./schema/schema')
const resolvers = require('./resolver/resolver')

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const app = express()
server.appMiddleware = ({ app })

app.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`) // domain.com/api
})