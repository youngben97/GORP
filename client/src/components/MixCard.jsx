import * as React from 'react';
import { Box, Grid, ThemeProvider, Typography, createTheme, Stack, Button } from '@mui/material';

const theme = createTheme({
    palette: {
        background: {
            secondary: '#D6C9C9',
            tertiary: '#C7D3DD',
            quaternary: '#6C91BF',
            dark: '#37393A',
        },
        text: {
            light: '#D9D0DE',
            dark: '#37393A',
            link: '#77B6EA',
        }
    }
})

export default function MixCard() {
    return (
        <ThemeProvider theme={theme}>
          <Grid item xs={6}>
            <Box
            sx={{
                bgcolor: 'background.secondary',
                boxShadow: 1,
                borderRadius: 2,
                minWidth: 300,
                display: 'flex',
                flexDirection: 'column'
            }}
            >
                {/* replace text with a link */}
              <Stack direction='row' sx={{
                    bgcolor: 'background.dark',
                    color: 'text.link',
                    width: 1,
                    borderRadius: '8px 8px 0 0',
                    display: 'flex',
                    justifyContent: 'space-between'
                    }}>
                    <Typography variant='button' sx={{ m: 1, fontSize: 'h6.fontSize'}}> Mix Name</Typography>
                    <Typography sx={{ m:1, color: 'text.light'}}>Username</Typography>
              </Stack>
              <Stack direction='row' sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Stack sx={{ display: 'flex', justifyContent: 'space-between'}}>
                  <Stack direction='row' alignItems='center' sx={{color: 'text.dark', borderRadius:2, p:1 }}>
                    <Typography variant='subtitle1'>Calories per serving:</Typography>
                    <Typography sx={{textAlign: 'center', mx: 1}}> ### </Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' sx={{color: 'text.dark', borderRadius:2, p:1 }}>
                    <Typography variant='subtitle1'>Protein per serving:</Typography>
                    <Typography sx={{textAlign: 'center', mx: 1}}> ##g </Typography>
                  </Stack>
                </Stack>
                <Stack direction='row' alignItems='center' sx={{color: 'text.light', display:'flex', justifyContent:'end'}}>
                  <Button variant="contained" sx={{ m: 1, p:1 }}>GORP</Button>
                  <Typography sx={{bgcolor: 'background.quaternary', m: 1, borderRadius:2}}>##</Typography>
                {/* replace gorp with a button */}
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </ThemeProvider>
    )
}

//calorie count, protein, upvote counter, upvote button