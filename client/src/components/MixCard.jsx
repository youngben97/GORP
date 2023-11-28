import React from 'react';
import { Card, CardContent, Typography} from '@mui/material';

const MixCard = ({ mix}) => {
    return (
        <Card>
            <CardContent>
                <Typography variant='h5' gutterBottom>
                    {mix.mixName}
                </Typography>
                <Typography>{mix.mixCreator}</Typography>
            </CardContent>
        </Card>
    );
};

export default MixCard;