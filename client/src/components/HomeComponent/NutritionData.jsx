import * as React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import { useMixContext } from '../../MixContext';


const NutritionData = () => {
    const { totals, setTotals } = useMixContext();
  
    // Now you can use totals and setTotals in your component
    // ...
  
    return (
      <Stack direction='row'>
        <Typography>Calories: {totals.calories}</Typography>
        <Typography>Protein: {totals.protein}</Typography>
        <Typography>Fats: {totals.fats}</Typography>
        <Typography>Carbs: {totals.carbs}</Typography>
        <Typography>Sodium: {totals.sodium}</Typography>
      </Stack>
    );
  };
  
  export default NutritionData;