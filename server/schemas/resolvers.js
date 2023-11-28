const { User, Mix, Ingredient } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Mix: {
        totalCalories: async (mix) => {
          // Calculate total calories based on the mix's ingredients
          const totalCalories = mix.ingredients.reduce((total, ingredient) => total + ingredient.calories, 0);
          return totalCalories;
        },
        totalProtein: async (mix) => {
          // Calculate total protein based on the mix's ingredients
          const totalProtein = mix.ingredients.reduce((total, ingredient) => total + ingredient.protein, 0);
          return totalProtein;
        },
        totalFats: async (mix) => {
          // Calculate total fats based on the mix's ingredients
          const totalFats = mix.ingredients.reduce((total, ingredient) => total + ingredient.fats, 0);
          return totalFats;
        },
        totalCarbs: async (mix) => {
          // Calculate total carbs based on the mix's ingredients
          const totalCarbs = mix.ingredients.reduce((total, ingredient) => total + ingredient.carbs, 0);
          return totalCarbs;
        },
        totalSodium: async (mix) => {
          // Calculate total sodium based on the mix's ingredients
          const totalSodium = mix.ingredients.reduce((total, ingredient) => total + ingredient.sodium, 0);
          return totalSodium;
        },
    },
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
              return User.findOne({ _id: context.user._id }).populate('mixes');
            }
            throw AuthenticationError;
        },
        getMixes: async () => {
            return Mix.find().populate('ingredients');
        },
        getMix: async (parent, { mixId }) => {
            try {
              const mix = await Mix.findOne({ _id: mixId }).populate('ingredients');
              return mix;
            } catch (error) {
              console.error('Error fetching mix:', error);
              throw error;
            }
          },
        getIngredients: async() => {
            return Ingredient.find();
        },
    },

    Mutation: {
        createUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
          },
          login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw AuthenticationError;
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw AuthenticationError;
            }
      
            const token = signToken(user);
      
            return { token, user };
          },
          //right now this is only saving the object IDs to the DB
          addMix: async (parent, { mixName, ingredients }, context) => {
            if (context.user) {

                const detailedIngredients = await Ingredient.find({ _id: { $in: ingredients }});

                const mix = await Mix.create({
                    mixName,
                    mixCreator: context.user.username,
                    ingredients: detailedIngredients,
                });
            
            await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { mixes: mix._id } }
            );
            
                return mix.populate('ingredients');
            }
                throw AuthenticationError;
            ('You need to be logged in!');
          },
          addComment: async (parent, { mixId, commentText }, context) => {
            if (context.user) {
                return Mix.findOneAndUpdate(
                    { _id: mixId },
                    {
                        $addToSet: {
                            comments: { commentText, commentAuthor: context.user.username },
                        },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw AuthenticationError;
          },
          removeMix: async (parent, { mixId }, context) => {
            if (context.user) {
                const mix = await Mix.findOneAndDelete({
                    _id: mixId,
                    mixCreator: context.user.username,
                });
                
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { mixes: mix._id} }
                );

                return mix;
            }
            throw AuthenticationError;
          },
          removeComment: async (parent, { mixId, commentId }, context) => {
            if (context.user) {
                return Mix.findOneAndUpdate(
                    { _id: mixId },
                    {
                        $pull: {
                            comments: {
                                _id: commentId,
                                commentAuthor: context.user.username,
                            },
                        },
                    },
                    { new: true }
                );
            }
            throw AuthenticationError;
          },
    },
};

module.exports = resolvers;
