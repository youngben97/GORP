import * as React from 'react';
import SignUp from '../components/SignupForm';
import Login from '../components/LoginForm';
import { Grid, Typography, Box, Container,} from '@mui/material';

export default function Home() {
    return (
        <Container sx={{
            flexGrow: 1,
            minHeight: '400px'
        }}>
            <Grid container spacing={16}>
                    <Grid item xs={12} md={6} minHeight={300}>
                        <Typography sx={{
                            fontSize: '3.5rem'
                        }}>
                            What the heck is even Gorp anyhow?
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} minHeight={300}>
                        <Typography sx={{
                            marginTop: '20px'
                        }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolores eum culpa dolorem a consectetur, aspernatur maiores nemo explicabo aperiam sequi nesciunt assumenda commodi vitae similique vero iure nobis deleniti!
                        </Typography>
                    </Grid>
            </Grid>
        </Container>
    )
}

