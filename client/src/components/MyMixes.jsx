import * as React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

//need to add delete button mutation (in modal?)
//need to replace mixname typography with an actual button

export default function MyMixes() {
  const { loading, error, data } = useQuery(QUERY_ME);
  if (loading) return <p>Loading...</p>;
  //change error to styled typography
  if (error) return <p> Login or sign up to view your mixes</p>;

  const user = data.me;

    return (
      <Stack sx={{direction: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <Typography variant='h5'>{user.username}'s Mixes</Typography>
        {user.mixes.map((mix) => (
          <Box key={mix._id}>
            <Typography variant='button'>{mix.mixName}</Typography>
            <Typography variant='subtitle1'>Created at: {mix.createdAt}</Typography>
          </Box>
        ))}
      </Stack>
    )
}
