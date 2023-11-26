import * as React from 'react';
import { Grid, Typography, Box, Container,} from '@mui/material';

export default function Home() {
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

