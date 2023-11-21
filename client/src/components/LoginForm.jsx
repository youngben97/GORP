import * as React from 'react';
import {
    Avatar,
    Button,
    TextField,
    // FormControlLabel,
    // Checkbox,
    Grid,
    Box,
    Typography,
    Container
} from '@mui/material';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password')
        });
    };

    return(
        <Container component='main' maxWidth='xs'>
            <Box
              sx={{
                marginTop:8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m:1, bgcolor: 'secondary.main'}}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component='h1' variant='h5'>
                Login
              </Typography>
              <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1}}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                Sign In
                </Button>
              </Box>
            </Box>
        </Container>
    )
}