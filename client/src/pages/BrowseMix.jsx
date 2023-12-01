import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MixCard from '../components/MixCard';
import { Container, Grid, Box, Typography, Stack } from '@mui/material';
import CommunityMixes from '../components/BrowseComponent/CommunityMixes';
import IngredientNutrient from '../components/BrowseComponent/IngrNutr';
import MixComments from '../components/BrowseComponent/MixComments';

export default function BrowseMix() {
    return (
        <Container sx={{ height: '100vh'}}>
            <Grid container spacing={2} sx={{ height: '100%', justifyContent: 'space-evenly'  }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ bgcolor: 'secondary.main', height: '100%', flexGrow: 1, borderRadius: '16px', p:1 }}>
                        <Stack sx={{ bgcolor: 'background.paper', alignItems: 'center', justifyContent: 'center', m:2, borderRadius:1}}>
                            <CommunityMixes />
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ bgcolor: 'secondary.main', height: '100%', flexGrow: 1, borderRadius: '16px', p:1 }}>
                      <Stack sx={{ bgcolor: 'background.paper', alignItems: 'center', justifyContent: 'center', m:2, borderRadius:1}}>
                            <IngredientNutrient/>
                      </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ bgcolor: 'secondary.main', height: '100%', flexGrow: 1, borderRadius: '16px', p:1 }}>
                        <Stack sx={{ bgcolor:'background.paper', direction: 'column', alignContent: 'center', justifyContent: 'center', m:2, borderRadius: 1 }}>
                            <MixComments/>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

//use code for iterating user mixes into grid items
