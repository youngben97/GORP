import React from 'react';
import { Stack, Typography } from '@mui/material';
import { useMixContext } from '../../MixContext';

export default function IngredientNutrient() {
  const { currentMixDetails } = useMixContext();

  return (
    <Stack sx={{ alignItems: 'center', justifyContent: 'center', p:1}}>
      {currentMixDetails && (
        <>
          <Typography variant='h4' sx={{bgcolor: 'primary.main', color: 'background.default', width: '100%', borderRadius:1, textAlign:'center', m:1, p:1}}>{currentMixDetails.mixName}</Typography>
          <Typography variant='h5'>Ingredients</Typography>
            {currentMixDetails.ingredients.map((ingredient) => (
              <Typography key={ingredient._id}>
                {ingredient.name}
              </Typography>
            ))}
          <Typography variant='subtitle1'>Total Calories: {currentMixDetails.totalCalories}</Typography>
          <Typography variant='subtitle1'>Total Protein: {currentMixDetails.totalProtein}</Typography>
          <Typography variant='subtitle1'>Total Fats: {currentMixDetails.totalFats}</Typography>
          <Typography variant='subtitle1'>Total Carbs: {currentMixDetails.totalCarbs}</Typography>
          <Typography variant='subtitle1'>Total Sodium: {currentMixDetails.totalSodium}</Typography>
        </>
      )}
      {!currentMixDetails && (
        <Typography variant='h6' sx={{bgcolor: 'primary.main', color: 'background.default', width: '100%', borderRadius:1, textAlign:'center', m:1, p:1}}>Select a mix to view its ingredients and nutritional information!</Typography>
      )}
    </Stack>
  );
}

