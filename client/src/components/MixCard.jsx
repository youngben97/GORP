import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MixCard() {
    return (
        <React.Fragment>
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                    GorpRopes
                </Typography>
                <CardActions>
                    <Button size="medium"> ABG Crunch </Button>
                </CardActions>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Calories: 250
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Protein: 20g
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    GORPs: 34 
                </Typography>
                <CardActions>
                    <Button size="small"> GORP! </Button>
                </CardActions>
            </CardContent>
        </Card>
        </React.Fragment>
    )
}

//calorie count, protein, upvote counter, upvote button