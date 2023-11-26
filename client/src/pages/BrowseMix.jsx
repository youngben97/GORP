import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MixCard from '../components/MixCard';
import { Container, Grid, Box } from '@mui/material';

export default function BrowseMix() {
    return (
        <Container sx={{ height: '100vh' }}>
            <Grid container spacing={2} sx={{ height: '100%', justifyContent: 'space-evenly'  }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ bgcolor: 'secondary.main', height: '100%', flexGrow: 1 }}></Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ bgcolor: 'secondary.main', height: '100%', flexGrow: 1 }}></Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ bgcolor: 'secondary.main', height: '100%', flexGrow: 1 }}></Box>
                </Grid>
            </Grid>
        </Container>
    )
}

//use code for iterating user mixes into grid items
