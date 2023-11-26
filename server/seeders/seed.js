const db = require('../config/connection');
const { User, Mix, Ingredient } = require('../models');
const userSeeds = require('./userSeeds.json');
const mixSeeds = require('./mixSeeds.json');
const ingredientSeeds = require('./ingredientSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    try {
        await cleanDB('Mix', 'mixes');
        await cleanDB('User', 'users');
        await cleanDB('Ingredient', 'ingredients');

        await User.create(userSeeds);

        await Ingredient.create(ingredientSeeds);

        // for (let i = 0; i < mixSeeds.length; i++) {
        //     const mixData = mixSeeds[i];
        //     const { _id, mixCreator } = await Mix.create(mixData);
        
        //     // Find the user and update their mixes
        //     const user = await User.findOneAndUpdate(
        //         { username: mixCreator },
        //         {
        //             $addToSet: {
        //                 mixes: _id,
        //             },
        //         }
        //     );
        
        //     // Find the ingredients in the mixData and associate them with the mix
        //     const ingredients = await Ingredient.find({ name: { $in: mixData.ingredients } });
            
        //     // Update the mix with the associated ingredients
        //     const updatedMix = await Mix.findOneAndUpdate(
        //         { _id },
        //         {
        //             $addToSet: {
        //                 ingredients: ingredients.map(ingredient => ingredient._id),
        //             },
        //         },
        //         { new: true } // To return the updated document
        //     );
        
            // console.log(`Mix ${updatedMix._id} created with ingredients: ${ingredients.map(ingredient => ingredient._id)}`);
        // }

    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('all done!');
    process.exit(0);
});