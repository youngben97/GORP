import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Stack, Link} from '@mui/material';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar sx={{justifyContent: 'space-between'}}>
                        <Link href='/' color='inherit' sx={{ typography: 'h1'}}>GORP</Link>
                        <Stack direction='row'>
                            <Link href='/browsemix' color='inherit' sx={{mx: 2}}>browse mixes</Link>
                            <Link href='/createmix' color='inherit' sx={{mx: 2}}>mix it up!</Link>
                            <Link href='/mymix' color='inherit' sx={{mx: 2}}>my mixes</Link>
                            {/* <Link color='inherit'>login</Link> */}
                        </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

// add login button 
//style further