import * as React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import { useQuery, useApolloClient } from '@apollo/client';
import { QUERY_MIXES, QUERY_MIX } from '../../utils/queries';
import { useMixContext } from '../../MixContext';

export default function CommunityMixes() {
  const client = useApolloClient();
  const { loading, data } = useQuery(QUERY_MIXES);
  const {updateMixDetails } = useMixContext();

  const handleButtonClick = async (mixId) => {
    try {
      console.log('Calling handleButtonClick with mixId:', mixId);
      
      const { data: mixData } = await client.query({
        query: QUERY_MIX,
        variables: { mixId },
      });

      console.log('Received mixData:', mixData);

      updateMixDetails(mixData.getMix);
    } catch (error) {
      console.error('Error fetching mix details:', error);
    }
  };

  if (loading) return <Typography>Loading...</Typography>

  const communityMix = data?.getMixes;

  if (!communityMix) return <Typography variant='body1' sx={{ bgcolor: 'primary.main', color: 'text.secondary', m:1, p:1, textAlign: 'center', borderRadius: 1}}>No community mixes found.</Typography>;

  return (
    <Stack sx={{ alignItems: 'center', justifyContent: 'center', p:1}}>
      <Typography variant='h5' sx={{color : 'text.secondary', m:1, p:1}}>Community Mixes</Typography>
      {communityMix?.map((mix, index) => 
        <Box key={mix._id} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', bgcolor: 'primary.main', p: 1, m:1, borderRadius: 1, width: '100%' }}>
          <Button variant='text' sx={{ color: 'text.secondary'}} onClick={() => handleButtonClick(mix._id)}>
            {mix.mixName}
          </Button>
          <Typography variant='subtitle' sx={{ color: 'text.secondary'}}>{mix.mixCreator}</Typography>
        </Box>
      )}
    </Stack>
  )
}