import * as React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import{ LOGIN_USER } from '../utils/mutation';
import Auth from '../utils/auth';

import {
    Avatar,
    Button,
    TextField,
    Box,
    Typography,
    Container
} from '@mui/material';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = (props) => {
  const [formState, setFormState] = useState({email: '', password: ''});
  const [login, { error, data }] = useMutation(LOGIN_USER);

    // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    })
  };
// submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: {...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
      // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

    return(
        // <Container component='main' maxWidth='xs'>
            <Box
              maxWidth='xs'
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
              <Box component='form' onSubmit={handleFormSubmit} noValidate sx={{ mt: 1}}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={handleChange}
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
                    onChange={handleChange}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                Log In
                </Button>
              </Box>
            </Box>
        // </Container>
    )
}

export default Login;
