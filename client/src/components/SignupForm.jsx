import * as React from 'react';
import { useState } from 'react';

import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutation';

import Auth from '../utils/auth';

import {
    Avatar,
    Button,
    TextField,
    Grid,
    Box,
    Typography,
    Container
} from '@mui/material';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const SignUp = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [createUser, { error, data }] = useMutation(CREATE_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
        const { data } = await createUser({
            variables: { ...formState},
        });

        Auth.login(data.createUser.token);
    } catch (e) {
        console.error(e);
    }
  };

return (
    // <Container component='main' maxWidth='xs'>
        <Box
          maxWidth='xs'
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <Avatar sx={{ m:1, bgcolor: 'secondary.main' }}>
                <AccountCircleIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
                Sign up
            </Typography>
            <Box component = 'form' noValidate onSubmit={handleFormSubmit} sx={{ mt: 3}}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="username"
                            name="username"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            autoFocus
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        onChange={handleChange}
                    />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign Up
                </Button>
            </Box>
        </Box>
    // </Container>
    )
};

export default SignUp;
