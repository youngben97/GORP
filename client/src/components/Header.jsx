import * as React from 'react';
import { AppBar, Box, Toolbar, Button, Stack, Modal} from '@mui/material';
import LogSignModal from './LogSignModal';

//Will need to incorporate Auth
// import Auth from '../utils/auth';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar sx={{justifyContent: 'space-between'}}>
                        <Button href='/' color='inherit' sx={{ typography: 'h1'}}>GORP</Button>
                        <Stack direction='row'>
                            <Button href='/browsemix' color='inherit' sx={{mx: 2}}>Browse mixes</Button>
                            <Button href='/createmix' color='inherit' sx={{mx: 2}}>Mix it up!</Button>
                            <Button href='/mymix' color='inherit' sx={{mx: 2}}>My mixes</Button>
                            <LogSignModal/>
                        </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

                            {/* <Link onClick={Auth.logout}>Logout</Link>         */}

                                        //   {/* if user is logged in show saved books and logout */}
                                        //   {Auth.loggedIn() ? (
                                        //     <>
                                        //       <Link href='/createmix' color='inherit' sx={{mx: 2}}>Mix it up!</Link>
                                        //       <Link href='/mymix' color='inherit' sx={{mx: 2}}>My mixes</Link>
                                        //       <Link onClick={Auth.logout}>Logout</Link>
                                        //     </>
                                        //   ) : (
                                        //       <LogSignModal />
                                        //   )}

// add login button 
//style further