import React from 'react';
import { Stack, Typography } from '@mui/material';
import { useMixContext } from '../../MixContext';

export default function IngredientNutrient() {
  const { currentMixDetails } = useMixContext();

  return (
    <Stack>
      {currentMixDetails && (
        <>
          <Typography variant='h4'>{currentMixDetails.mixName}</Typography>
          <Typography variant='h5'>Ingredients</Typography>
          <ul>
            {currentMixDetails.ingredients.map((ingredient) => (
              <li key={ingredient._id}>
                {ingredient.name}: {ingredient.amount}
              </li>
            ))}
          </ul>
          <Typography variant='subtitle1'>Total Calories: {currentMixDetails.totalCalories}</Typography>
          <Typography variant='subtitle1'>Total Protein: {currentMixDetails.totalProtein}</Typography>
          <Typography variant='subtitle1'>Total Fats: {currentMixDetails.totalFats}</Typography>
          <Typography variant='subtitle1'>Total Carbs: {currentMixDetails.totalCarbs}</Typography>
          <Typography variant='subtitle1'>Total Sodium: {currentMixDetails.totalSodium}</Typography>
        </>
      )}
      {!currentMixDetails && (
        <Typography variant='body1'>No mix details available. Please select a mix.</Typography>
      )}
    </Stack>
  );
}

