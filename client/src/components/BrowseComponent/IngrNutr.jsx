import React from 'react';
import { Stack, Typography, Grid } from '@mui/material';
import { useMixContext } from '../../MixContext';

export default function IngredientNutrient() {
  const { currentMixDetails } = useMixContext();

  return (
    <Stack sx={{ alignItems: 'center', justifyContent: 'center', p:1}}>
      {currentMixDetails && (
        <>
          <Typography variant='h4' sx={{bgcolor: 'primary.main', color: 'background.default', width: '100%', borderRadius:1, textAlign:'center', m:1, p:1, border:2, borderColor: 'background.default' }}>{currentMixDetails.mixName}</Typography>
          <Typography variant='h5' sx={{bgcolor: 'primary.main', color: 'background.default', width: '100%', borderRadius:1, textAlign:'center', m:1, p:1, border:2, borderColor: 'background.default' }}>Ingredients</Typography>
            {currentMixDetails.ingredients.map((ingredient) => (
              <Typography key={ingredient._id}>
                {ingredient.name}
              </Typography>
            ))}
          <Grid container rowSpacing={2} sx={{ justifyContent: 'center', alignItems: 'center'}}>
            <Grid item xs={6}>
              <Stack sx={{ bgcolor: 'primary.main', m: 1, p: 1, flex: 1, borderRadius:1, border:2, borderColor: 'background.default'  }}>
                <Typography sx={{ color: 'background.default', textAlign: 'center' }}>Calories:</Typography>
                <Typography sx={{ bgcolor: 'background.default', textAlign: 'center' }}>{currentMixDetails.totalCalories}</Typography>
              </Stack>
              <Stack sx={{ bgcolor: 'primary.main', m: 1, p: 1, flex: 1, borderRadius:1, border:2, borderColor: 'background.default'  }}>
                <Typography sx={{ color: 'background.default', textAlign: 'center' }}>Protein:</Typography>
                <Typography sx={{ bgcolor: 'background.default', textAlign: 'center' }}>{currentMixDetails.totalProtein}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack sx={{ bgcolor: 'primary.main', m: 1, p: 1, flex: 1, borderRadius:1, border:2, borderColor: 'background.default'  }}>
                <Typography sx={{ color: 'background.default', textAlign: 'center' }}>Total Fats:</Typography>
                <Typography sx={{ bgcolor: 'background.default', textAlign: 'center' }}>{currentMixDetails.totalFats}</Typography>
              </Stack>
              <Stack sx={{ bgcolor: 'primary.main', m: 1, p: 1, flex: 1, borderRadius:1, border:2, borderColor: 'background.default'  }}>
                <Typography sx={{ color: 'background.default', textAlign: 'center' }}>Carbs:</Typography>
                <Typography sx={{ bgcolor: 'background.default', textAlign: 'center' }}>{currentMixDetails.totalCarbs}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack sx={{ bgcolor: 'primary.main', m: 1, p: 1, flex: 1, borderRadius:1, border:2, borderColor: 'background.default'  }}>
                  <Typography sx={{ color: 'background.default', textAlign: 'center' }}>Sodium:</Typography>
                  <Typography sx={{ bgcolor: 'background.default', textAlign: 'center' }}>{currentMixDetails.totalSodium}</Typography>
              </Stack>
            </Grid>
          </Grid>
        </>
      )}
      {!currentMixDetails && (
        <Typography variant='h6' sx={{bgcolor: 'primary.main', color: 'background.default', width: '100%', borderRadius:1, textAlign:'center', m:1, p:1, border:2, borderColor: 'background.default'}}>Select a mix to view its ingredients and nutritional information!</Typography>
      )}
    </Stack>
  );
}

