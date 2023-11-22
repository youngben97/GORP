import * as React from 'react';
import SignUp from '../components/SignupForm';
import Login from '../components/LoginForm';
import { Grid, Typography, Box,} from '@mui/material';

export default function Home() {
    return (
        <Box sx={{
            flexGrow: 1,
            minHeight: '400px'
        }}>
            <Grid Container>
                {sectionItems.map((item) => (
                    <Grid
                        item
                        xs={12}
                        md={3.5}
                        minHeight={300}
                        key={item.id}
                    >
                        <Typography>{item.sentence}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

