import { gql } from '@apollo/client';
// import { removeClientSetsFromDocument } from '@apollo/client/utilities';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_MIX = gql`
mutation addMix($mixName: String!, $ingredients: [ID]!) {
  addMix(mixName: $mixName, ingredients: $ingredients) {
    _id
    createdAt
    ingredients {
      calories
      _id
      carbs
      fats
      protein
      name
      sodium
    }
    mixCreator
    mixName
  }
}
`;


export const ADD_COMMENT = gql`
mutation addComment($mixId: ID!, $commentText: String!) {
  addComment(mixId: $mixId, commentText: $commentText) {
    _id
    comments {
      commentAuthor
      commentText
      createdAt
    }
    createdAt
    ingredients {
      calories
      carbs
      _id
      fats
      name
      protein
      sodium
    }
    mixCreator
    mixName
  }
}
`

export const REMOVE_MIX = gql`
mutation removeMix($mixId: ID!) {
  removeMix(mixId: $mixId) {
    _id
    mixName
    mixCreator
  }
}
`;

export const REMOVE_COMMENT = gql`
mutation removeComment($mixId: ID!, $commentId: ID!) {
  removeComment(mixId: $mixId, commentId: $commentId) {
    _id
    mixCreator
    mixName
    comments {
      _id
      commentAuthor
      commentText
      createdAt
    }
  }
}
`;