import { Button, FormControl, TextField } from "@mui/material";
import { useState } from "react";

export default function SignUp () {
    const [userFormData, setUserFormData] = useState({username: '', email: '', password: ''});

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setUserFormData({...userFormData, [name]: value})
    }

    const handleFormSubmit =
    //add logic for handling form submission once addUser functionality is written
    
    return (
        <Container component="main" maxWidth="xs">
            <form>
                <FormControl fullWidth>
                    <TextField
                        label="email"
                        type="email"
                        placeholder="Your email"
                        name="email"
                    />
                </FormControl>
                <FormControl fullWidth>
                    <TextField
                        label="username"
                        type="text"
                        placeholder='Your username'
                        name='username' 
                    />
                </FormControl>
                <FormControl fullWidth>
                    <TextField
                        label="password"
                        type="password"
                        placeholder="Your password"
                        name="password"
                        required
                    />
                </FormControl>
                <Button
                    disabled={!(userFormData.username && userFormData.email && userFormData.password)}
                    type="submit"
                    variant="success">
                        Submit
                </Button>
            </form>
        </Container>
    )
}   