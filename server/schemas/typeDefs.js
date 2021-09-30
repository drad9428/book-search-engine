const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type Query{
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(boodData: BookInput!): User
        removeBook(bookId: ID!): User
    }

    type User {
        _id: ID!
        username: String!
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        boodId: ID!
        authors: [String]
        description: String
        image: String
        link: String
        title: String!
    }

    type Auth {
            token: ID!
            user: User
    }

    input BookInput {
        authors: [String]
        description: String!
        bookId: String
        image: String
        link: String
        title: String!
    }
`

module.exports = typeDefs