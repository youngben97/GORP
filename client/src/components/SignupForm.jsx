import { Button, FormControl, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function SignUp () {
    const [userFormData, setUserFormData] = useState({username: '', email: '', password: ''});

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setUserFormData({...userFormData, [name]: value})
    }
        // add logic for handling form submission once addUser functionality is written
    // const handleFormSubmit =

    return (
        <React.Fragment component="main" maxWidth="xs">
            <Typography>
                Ready to GORP out? Sign up to start making your concoctions today!
            </Typography>
                <Form fullWidth>
                    <TextField
                        label="email"
                        type="email"
                        placeholder="Your email"
                        name="email"
                    />
                </Form>
                <Form fullWidth>
                    <TextField
                        label="username"
                        type="text"
                        placeholder='Your username'
                        name='username' 
                    />
                </Form>
                <Form fullWidth>
                    <TextField
                        label="password"
                        type="password"
                        placeholder="Your password"
                        name="password"
                        required
                    />
                </Form>
                <Button
                    disabled={!(userFormData.username && userFormData.email && userFormData.password)}
                    type="submit"
                    variant="success">
                        Submit
                </Button>
        </React.Fragment>
    )
}   