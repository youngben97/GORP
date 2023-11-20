import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormControl } from '@mui/material';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// export default function SignUp() {
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const data = new FormData(event.currentTarget);
//         console.log({
//             email: data.get('email'),
//             password: data.get('password')
//         });
//     };
    
//     return (
//         <ThemeProvider theme={theme}>
//             <Container component="main" maxWidth="xs">

//             </Container>
//         </ThemeProvider>
//     )
// }

export default function SignUp () {
    return (
        <Container component="main" maxWidth="xs">
            <form>
                <FormControl fullWidth>
                    <TextField
                        label="username"
                        type="text"
                        placeholder='Your username'
                        name='username' 
                    />
                </FormControl>
            </form>
        </Container>
    )
}   