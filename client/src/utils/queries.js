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
query getMix ($mixId: ID!) {
  getMix(mixId: $mixId) {
    _id
    comments {
      commentAuthor
      commentBody
      commentId
      createdAt
    }
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
    mixCreator
    mixName
    totalCalories
    totalProtein
    totalFats
    totalCarbs
    totalSodium
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