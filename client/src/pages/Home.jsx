import * as React from 'react';
import { Grid, Typography, Box, Container, Stack } from '@mui/material';
import MixMaker from '../components/MixMaker';
import MyMixes from '../components/MyMixes';

export default function Home() {
    return (
        <Container sx={{ height: '100vh' }}>
            <Grid container spacing={2} sx={{ height: '100%', justifyContent: 'space-evenly'  }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ bgcolor: 'secondary.main', height: '100%', flexGrow: 1 }}>
                        <Stack sx={{ direction: 'column', alignContent: 'center', justifyContent: 'center'}}>
                            <Typography variant= 'h4' sx={{ color: 'text.primary', m: 2, textAlign: 'center' }}>Welcome to GORP</Typography>
                            <Typography variant='body1' sx={{ color: 'text.primary', m: 2, textAlign: 'center' }}>Come up with your own custom trail mix, get nutritional data, and share mixes with others.</Typography>
                            <Typography variant='body1' sx={{ color: 'text.primary', m: 2, textAlign: 'center' }}>Use the mix-maker below to get GORPing!</Typography>
                            <MixMaker />
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ bgcolor: 'secondary.main', height: '100%', flexGrow: 1 }}>
                    <Typography sx={{ color: 'text.primary'}}>GORP nutritional info for mix here</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ bgcolor: 'secondary.main', height: '100%', flexGrow: 1 }}>
                    <MyMixes />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

