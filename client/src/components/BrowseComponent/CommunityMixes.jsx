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

  if (!communityMix) return <Typography variant='body1' sx={{ bgcolor: 'primary.main', color: 'background.default', my:1, p:1, textAlign: 'center', borderRadius: 1}}>No community mixes found.</Typography>;

  return (
    <Stack sx={{ alignItems: 'center', justifyContent: 'center', p:1}}>
      <Typography variant='h4' sx={{bgcolor: 'primary.main', color: 'background.default', width: '100%', borderRadius:1, textAlign:'center', m:1, p:1}}>Community Mixes</Typography>
      {communityMix?.map((mix, index) => 
        <Box key={mix._id} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'space-between', bgcolor: 'background.default', p: 1, m:1, borderRadius: 1, width: '100%' }}>
          <Button variant='outlined' sx={{ color: 'error.light'}} onClick={() => handleButtonClick(mix._id)}>
            {mix.mixName}
          </Button>
          <Typography variant='subtitle' sx={{ color: 'text.secondary'}}> Created by: {mix.mixCreator}</Typography>
        </Box>
      )}
    </Stack>
  )
}