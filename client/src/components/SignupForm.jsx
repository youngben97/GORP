import React, {useState} from 'react';
import { TextField, Button, createTheme, Stack } from '@mui/material';
import { Link } from "react-router-dom"

const theme = createTheme({
    palette: {
        background: {
            secondary: '#D6C9C9',
            tertiary: '#C7D3DD',
            quaternary: '#6C91BF',
            dark: '#37393A',
        },
        text: {
            light: '#D9D0DE',
            dark: '#37393A',
            link: '#77B6EA',
        }
    }
});

const SignUpForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 
    function handleSubmit(event) {
        event.preventDefault();
        console.log(firstName, lastName, email, password) 
    }
 
    return (
        <React.Fragment>
            <h2>Say pard', are you ready to git on yer GORP adventure? Sign up to GORP OUT!</h2>
            <form onSubmit={handleSubmit} action={<Link to="/login" />}>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="First Name"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        fullWidth
                        required
                        sx={{ 
                            display: 'flex', 
                            justifyContent: 'center' 
                        }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Last Name"
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                        fullWidth
                        required
                    />
                </Stack>
                <TextField
                    type="email"
                    variant='outlined'
                    color='secondary'
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="password"
                    variant='outlined'
                    color='secondary'
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                <Button variant="outlined" color="secondary" type="submit">Register</Button>
            </form>
            <small>Already have an account? <Link to="/login">Login Here</Link></small>
     
        </React.Fragment>
    )
}
 
export default SignUpForm;

// import { Button, TextField, Typography, createTheme } from "@mui/material";
// import { red } from "@mui/material/colors";
// import React, { useState } from "react";

// const theme = createTheme({
//     palette: {
//         backg: ''
//     }
// })

// export default function SignUp () {
//     const [userFormData, setUserFormData] = useState({username: '', email: '', password: ''});

//     const handleInputChange = (event) => {
//         const {name, value} = event.target;
//         setUserFormData({...userFormData, [name]: value})
//     }
//         // add logic for handling form submission once addUser functionality is written
//     // const handleFormSubmit =

//     return (
//         <React.Fragment>
//             <Typography sx={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 height: '10vh',
//                 border: 1,
//                 borderRadius: '16px',
//                 gap: '16px',
//                 flexDirection: 'column'
//             }}>
//                 Ready to GORP out? Sign up to start making your concoctions today!
//             </Typography>
//                 <form>
//                     <TextField
//                         label="email"
//                         type="email"
//                         placeholder="Your email"
//                         name="email"
//                         sx={{
//                             display: 'flex',
//                             justifyContent: 'center',
//                             height: '10vh',
//                             gap: '16px',
//                             flexDirection: 'column',
//                             '& .MuiOutlinedInput-root fieldset': {
//                                 border: '5px solid',
//                                 borderRadius: '16px',
//                                 borderColor: 'pink'
//                         }}}
//                     />
//                 </form>
//                 <form>
//                     <TextField
//                         label="username"
//                         type="text"
//                         placeholder='Your username'
//                         name='username' 
//                         sx={{
//                             display: 'flex',
//                             justifyContent: 'center',
//                             height: '10vh',
//                             gap: '16px',
//                             flexDirection: 'column'
//                         }}
//                     />
//                 </form>
//                 <form>
//                     <TextField
//                         label="password"
//                         type="password"
//                         placeholder="Your password"
//                         name="password"
//                         required
//                         sx={{
//                             display: 'flex',
//                             justifyContent: 'center',
//                             height: '10vh',
//                             gap: '16px',
//                             flexDirection: 'column'
//                         }}
//                     />
//                 </form>
//                 <Button
//                     disabled={!(userFormData.username && userFormData.email && userFormData.password)}
//                     type="submit"
//                     variant="success">
//                         Submit
//                 </Button>
//         </React.Fragment>
//     )
// }   