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