import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const MixCard = ({ mix }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant='h5'>{mix.mixName}</Typography>
                <Typography>{mix.description}</Typography>
            </CardContent>
        </Card>
    )
}

const CommunitySection = ({ mixes }) => {
    return (
        <div>
            <Typography variant='h4'>Community Mixes</Typography>
            {mixes.map((mix) => (
                <MixCard key={mix.id} mix={mix} />
            ))}
        </div>
    )
}
