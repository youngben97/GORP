import * as React from 'react';
import { AppBar, Box, Toolbar, Button, Stack, Modal} from '@mui/material';
import LogSignModal from './LogSignModal';

import Auth from '../utils/auth';
export default function Navbar() {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    //need to add title element back in and style buttons
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar sx={{justifyContent: 'space-between'}}>
                    {Auth.loggedIn() ? (
                        <>
                        <Button href='/' color='inherit' sx={{mx: 2}}>
                            {Auth.getProfile().data.username}'s mixes
                        </Button>
                        <Button href='/browsemix' color='inherit' sx={{mx: 2}}>Browse Mixes</Button>
                        <Button color='inherit' onClick={logout}>
                            Logout
                        </Button>
                        </>
                    ) : (
                        <LogSignModal />
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

{/* <Stack direction='row'>
<Button href='/browsemix' color='inherit' sx={{mx: 2}}>Mix it Up!</Button>
<LogSignModal/>
</Stack> */}


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