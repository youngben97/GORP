import * as React from 'react';
import { Grid, Typography, Box, Container, Stack } from '@mui/material';
import MixMaker from '../components/MixMaker';
import MyMixes from '../components/MyMixes';

export default function Home() {
    return (
        <Container sx={{ height: '80vh' }}>
            <Grid container spacing={2} sx={{ height: '100%', justifyContent: 'space-evenly'  }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ bgcolor: 'secondary.main', height: '100%', flexGrow: 1, borderRadius: '16px', p:1 }}>
                        <Stack sx={{ bgcolor:'background.paper', direction: 'column', alignContent: 'center', justifyContent: 'center', m:2, borderRadius: 1 }}>
                            <Stack sx={{ bgcolor: 'primary.main', direction: 'column', alignContent: 'center', justifyContent: 'center', m: 1, borderRadius: 1}}>
                                <Typography variant= 'h4' sx={{ color: 'text.secondary', m:1, textAlign: 'center' }}>Mix it up!</Typography>
                                <Typography variant='body1' sx={{ color: 'text.secondary', m:1, textAlign: 'center'}}>Come up with your own custom trail mix, get nutritional data, and share mixes with others.</Typography>
                                <Typography variant='body1' sx={{ color: 'text.secondary', m:1, textAlign: 'center'}}>Use the mix-maker below to get GORPing!</Typography>
                            </Stack>
                            <MixMaker/>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ bgcolor: 'secondary.main', height: '100%', flexGrow: 1, borderRadius: '16px' }}>
                    <Typography sx={{ color: 'text.primary'}}>GORP nutritional info for mix here</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ bgcolor: 'secondary.main', height: '100%', flexGrow: 1, borderRadius: '16px' }}>
                    <MyMixes />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

