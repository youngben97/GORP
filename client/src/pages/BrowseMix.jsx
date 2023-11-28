import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MixCard from '../components/MixCard';
import { Container, Grid, Box, Typography } from '@mui/material';
import CommunityMixes from '../components/CommunityMixes';

export default function BrowseMix() {
    return (
        <Container sx={{ height: '100vh' }}>
            <Grid container spacing={2} sx={{ height: '100%', justifyContent: 'space-evenly'  }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ bgcolor: 'secondary.main', height: '100%', flexGrow: 1 }}>
                    {/* <Typography sx={{ color: 'text.primary'}}>Community mixes here- think of name</Typography>
                    <Typography sx={{ color: 'text.primary'}}>list item components for each, can be selected</Typography> */}
                    <CommunityMixes />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ bgcolor: 'secondary.main', height: '100%', flexGrow: 1 }}>
                    <Typography sx={{ color: 'text.primary'}}>nutrition facts like on home</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ bgcolor: 'secondary.main', height: '100%', flexGrow: 1 }}>
                    <Typography sx={{ color: 'text.primary'}}>comments here</Typography>
                    <Typography sx={{ color: 'text.primary'}}>list item component for each comment</Typography>
                    <Typography sx={{ color: 'text.primary'}}>comment button</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

//use code for iterating user mixes into grid items
