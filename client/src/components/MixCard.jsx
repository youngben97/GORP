import * as React from 'react';
import { Box, Grid, Typography, Stack, Button } from '@mui/material';

export default function MixCard() {
    return (
          <Grid item xs={6}>
            <Box
            sx={{
                bgcolor: 'background.paper',
                boxShadow: 1,
                borderRadius: 2,
                minWidth: 300,
                display: 'flex',
                flexDirection: 'column'
            }}
            >
                {/* replace text with a link */}
              <Stack direction='row' sx={{
                    bgcolor: 'primary.main',
                    color: 'text.secondary',
                    width: 1,
                    borderRadius: '8px 8px 0 0',
                    justifyContent: 'space-between'
                    }}>
                    <Typography variant='button' sx={{ m: 1, fontSize: 'h6.fontSize'}}> Mix Name</Typography>
                    <Typography sx={{ m:1, color: 'text.secondary'}}>Username</Typography>
              </Stack>
              <Stack direction='row' sx={{justifyContent: 'space-between'}}>
                <Stack sx={{ justifyContent: 'space-between'}}>
                  <Stack direction='row' alignItems='center' sx={{color: 'text.dark', borderRadius:2, p:1 }}>
                    <Typography variant='subtitle1'>Calories per serving:</Typography>
                    <Typography sx={{textAlign: 'center', mx: 1}}> ### </Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' sx={{color: 'text.dark', borderRadius:2, p:1 }}>
                    <Typography variant='subtitle1'>Protein per serving:</Typography>
                    <Typography sx={{textAlign: 'center', mx: 1}}> ##g </Typography>
                  </Stack>
                </Stack>
                <Stack direction='row' alignItems='center' sx={{color: 'text.light', justifyContent:'end'}}>
                  <Button variant="contained" sx={{ m: 1, p:1 }}>GORP</Button>
                  <Typography sx={{ m: 1, borderRadius:2}}>##</Typography>
                {/* replace gorp with a button */}
                </Stack>
              </Stack>
            </Box>
          </Grid>
    )
}

//calorie count, protein, upvote counter, upvote button