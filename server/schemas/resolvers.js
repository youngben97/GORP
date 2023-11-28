const { User, Mix, Ingredient } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
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
        getMix: async(parent, { mixId }) => {
            return Mix.findOne({ mixId }).populate('ingredients');
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
