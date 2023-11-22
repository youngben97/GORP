const typeDefs = `

scalar DateTime

type User {
    _id: ID
    username: String
    email: String
    password: String
    mixes: [Mix]
}

type Mix {
    _id: ID
    mixName: String
    mixCreator: String
    createdAt: String
    ingredients: [Ingredient]
    comments: [Comment]
}

type Comment {
    commentId: ID
    commentBody: String
    commentAuthor: String
    createdAt: String
}

type Ingredient {
    _id: ID
    name: String
    calories: Float
    protein: Float
    fats: Float
    carbs: Float
    sodium: Float
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
    getMixes: [Mix]
    getMix(mixId: ID!): Mix
    getIngredients: [Ingredient]
}

type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addMix(mixName: String!, ingredients: [ID]!): Mix
    addComment(mixId: ID!, commentText: String!): Mix
    removeMix(mixId: ID!): Mix
    removeComment(mixID: ID!, commentId: ID!): Mix
}

`

module.exports = typeDefs;