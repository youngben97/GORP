import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query me {
  me {
    _id
    email
    username
    mixes {
      _id
      createdAt
      mixCreator
      mixName
    }
  }
}
`;

export const QUERY_MIXES = gql`
query getMixes {
  getMixes {
    _id
    comments {
      commentAuthor
      commentBody
      createdAt
      commentId
    }
    createdAt
    ingredients {
      calories
      carbs
      fats
      protein
      name
      sodium
      _id
    }
    mixCreator
    mixName
  }
}
`;

export const QUERY_MIX = gql`
query getMix($mixId: ID!) {
  getMix(mixId: $mixId) {
    _id
    mixCreator
    mixName
    totalCalories
    totalCarbs
    totalFats
    totalProtein
    totalSodium
    createdAt
    ingredients {
      _id
      calories
      carbs
      name
      fats
      protein
      sodium
    }
    comments {
      _id
      commentAuthor
      commentText
      createdAt
    }
  }
}
`;

export const QUERY_INGREDIENTS = gql`
query getIngredients {
  getIngredients {
    _id
    calories
    carbs
    fats
    name
    protein
    sodium
  }
}
`;