import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import MixCard from '../components/MixCard';
import { Container, Grid } from '@mui/material';

// {/* <Grid container spacing={2}>
//   <Grid item xs={8}>
//     <Item>xs=8</Item>
//   </Grid>
//   <Grid item xs={4}>
//     <Item>xs=4</Item>
//   </Grid>
//   <Grid item xs={4}>
//     <Item>xs=4</Item>
//   </Grid>
//   <Grid item xs={8}>
//     <Item>xs=8</Item>
//   </Grid>
// </Grid> */}

export default function BrowseMix() {
    return (
        <Container>
            <Grid container spacing={5}>
                <MixCard />
                <MixCard />
                <MixCard />
                <MixCard />
                <MixCard />
                <MixCard />
            </Grid>
        </Container>
    )
}