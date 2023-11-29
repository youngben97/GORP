import * as React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import { useMixContext } from '../../MixContext';


const NutritionData = () => {
    const { totals, setTotals } = useMixContext();
  
    return (
      <Stack sx={{ alignItems: 'center', justifyContent: 'center'}}>
        <Typography sx={{m:1, p:1, color: 'background.default'}}>Calories:</Typography>
        <Typography sx={{color: 'background.default'}}>{totals.calories}</Typography>
        <Typography sx={{m:1, p:1, color: 'background.default'}}>Protein:</Typography>
        <Typography sx={{color: 'background.default'}}>{totals.protein}</Typography>
        <Typography sx={{m:1, p:1, color: 'background.default'}}>Fats:</Typography>
        <Typography sx={{color: 'background.default'}}>{totals.fats}</Typography>
        <Typography sx={{m:1, p:1, color: 'background.default'}}>Carbs:</Typography>
        <Typography sx={{color: 'background.default'}}>{totals.carbs}</Typography>
        <Typography sx={{m:1, p:1, color: 'background.default'}}>Sodium:</Typography>
        <Typography sx={{mb: 2, color: 'background.default' }}>{totals.sodium}</Typography>
      </Stack>
    );
  };
  
  export default NutritionData;