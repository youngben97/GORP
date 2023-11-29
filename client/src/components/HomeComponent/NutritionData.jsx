import * as React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import { useMixContext } from '../../MixContext';


const NutritionData = () => {
    const { totals, setTotals } = useMixContext();
  
    return (
      <Stack sx={{ alignItems: 'center', justifyContent: 'center'}}>
        <Typography sx={{m:1, p:1}}>Calories:</Typography>
        <Typography>{totals.calories}</Typography>
        <Typography sx={{m:1, p:1}}>Protein:</Typography>
        <Typography>{totals.protein}</Typography>
        <Typography sx={{m:1, p:1}}>Fats:</Typography>
        <Typography>{totals.fats}</Typography>
        <Typography sx={{m:1, p:1}}>Carbs:</Typography>
        <Typography>{totals.carbs}</Typography>
        <Typography sx={{m:1, p:1}}>Sodium:</Typography>
        <Typography sx={{mb: 2 }}>{totals.sodium}</Typography>
      </Stack>
    );
  };
  
  export default NutritionData;