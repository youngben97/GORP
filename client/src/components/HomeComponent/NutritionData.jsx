import * as React from 'react';
import { Stack, Typography, Grid } from '@mui/material';
import { useMixContext } from '../../MixContext';

const NutritionData = () => {
  const { totals } = useMixContext();

  return (
    <Grid container rowSpacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <Grid item xs={6}>
        <Stack sx={{ bgcolor: 'primary.main', m: 1, p: 1, flex: 1, borderRadius:1 }}>
          <Typography sx={{ color: 'background.default', textAlign: 'center' }}>Calories:</Typography>
          <Typography sx={{ bgcolor: 'background.default', textAlign: 'center' }}>{totals.calories}</Typography>
        </Stack>
        <Stack sx={{ bgcolor: 'primary.main', m: 1, p: 1, flex: 1, borderRadius:1 }}>
          <Typography sx={{ color: 'background.default', textAlign: 'center' }}>Protein:</Typography>
          <Typography sx={{ bgcolor: 'background.default', textAlign: 'center' }}>{totals.protein}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack sx={{ bgcolor: 'primary.main', m: 1, p: 1, flex: 1, borderRadius:1 }}>
          <Typography sx={{ color: 'background.default', textAlign: 'center' }}>Fats:</Typography>
          <Typography sx={{ bgcolor: 'background.default', textAlign: 'center' }}>{totals.fats}</Typography>
        </Stack>
        <Stack sx={{ bgcolor: 'primary.main', m: 1, p: 1, flex: 1, borderRadius:1 }}>
          <Typography sx={{ color: 'background.default', textAlign: 'center' }}>Carbs:</Typography>
          <Typography sx={{ bgcolor: 'background.default', textAlign: 'center' }}>{totals.carbs}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack sx={{ bgcolor: 'primary.main', m: 1, p: 1, flex: 1, borderRadius:1 }}>
          <Typography sx={{ color: 'background.default', textAlign: 'center' }}>Sodium:</Typography>
          <Typography sx={{ bgcolor: 'background.default', textAlign: 'center' }}>{totals.sodium}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default NutritionData;
