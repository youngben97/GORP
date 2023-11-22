import { Box, Typography, Container, Grid } from '@mui/material';
import * as React from 'react';
import MixCard from './MixCard'

export default function MyMix() {
    return (
        <Container>
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography component='h1' variant='h4'>
                My Mixes
            </Typography>
            <Grid container spacing={5}>
                <MixCard />
                <MixCard />
                <MixCard />
                <MixCard />
                <MixCard />
                <MixCard />
            </Grid>
        </Box>
    </Container>
    )
}