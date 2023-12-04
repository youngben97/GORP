import * as React from 'react';
import { Grid, Typography, Box, Container, Stack } from '@mui/material';
import MixMaker from '../components/HomeComponent/MixMaker';
import MyMixes from '../components/HomeComponent/MyMixes';
import NutritionData from '../components/HomeComponent/NutritionData';

export default function Home() {
    return (
        <Container sx={{ height: '80vh' }}>
            <Grid container spacing={2} sx={{ height: '100%', justifyContent: 'space-evenly'  }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ bgcolor: 'secondary.main', height: '100%', flexGrow: 1, borderRadius: '16px', p:1 }}>
                        <Stack sx={{ bgcolor:'background.paper', direction: 'column', alignContent: 'center', justifyContent: 'center', m:2, borderRadius: 1 }}>
                            <Stack sx={{ bgcolor: 'primary.main', direction: 'column', alignContent: 'center', justifyContent: 'center', m: 1, borderRadius: 1, border:2, borderColor: 'background.default' }}>
                                <Typography variant= 'h4' sx={{ color: 'background.default', m:1, textAlign: 'center' }}>Mix it up!</Typography>
                                <Typography variant='body1' sx={{ color: 'background.default', m:1, textAlign: 'center'}}>Come up with your own custom trail mix, get nutritional data, and share mixes with others.</Typography>
                                <Typography variant='body1' sx={{ color: 'background.default', m:1, textAlign: 'center'}}>Use the mix-maker below to get GORPing!</Typography>
                            </Stack>
                            <MixMaker/>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ bgcolor: 'secondary.main', height: '100%', flexGrow: 1, borderRadius: '16px', p:1 }}>
                        <Stack sx={{ bgcolor:'background.paper', direction: 'column', alignContent: 'center', justifyContent: 'center', m:2, borderRadius: 1 }}>
                            <Stack sx={{ bgcolor: 'primary.main', direction: 'column', alignContent: 'center', justifyContent: 'center', m:1, borderRadius: 1, border:2, borderColor: 'background.default' }}>
                                <Typography variant= 'h6' sx={{ color: 'background.default', m:1, textAlign: 'center' }}>As you build your mix, you will see totals of different macronutrients here.</Typography>
                                <Typography variant='body1' sx={{ color: 'background.default', m:1, textAlign: 'center'}}>Macronutrient totals are based on an oz of an ingredient.</Typography>
                            </Stack>
                            <NutritionData/>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ bgcolor: 'secondary.main', height: '100%', flexGrow: 1, borderRadius: '16px', p:1 }}>
                      <Stack sx={{ bgcolor:'background.paper', direction: 'column', alignContent: 'center', justifyContent: 'center', m:2, borderRadius: 1 }}>
                        <MyMixes/>
                      </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

