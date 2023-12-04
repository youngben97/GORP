import * as React from 'react';
import { AppBar, Box, Toolbar, Button, Stack, useTheme } from '@mui/material';
import LogSignModal from './LoginSignUp/LogSignModal';


import Auth from '../utils/auth';
export default function Navbar() {
    const theme = useTheme();

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();

    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='fixed'>
                <Toolbar sx={{justifyContent: 'space-between', [theme.breakpoints.down('sm')]: { flexDirection: 'column' }}}>
                    <Button href='/' color='inherit' sx={{ typography: 'h1', color: 'background.default'}}>GORP</Button>
                    {Auth.loggedIn() ? (
                        <>
                        <Stack direction='row'>
                        <Button href='/' color='inherit' sx={{mx: 2}}>
                            {Auth.getProfile().data.username}'s mixes
                        </Button>
                        <Button href='/browsemix' color='inherit' sx={{mx: 2, color: 'background.default'}}>Browse Mixes</Button>
                        <Button color='inherit' onClick={logout} sx={{color: 'background.default'}}>
                            Logout
                        </Button>
                        </Stack>
                        </>
                    ) : (
                        <LogSignModal />
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    )
}