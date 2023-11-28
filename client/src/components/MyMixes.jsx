import * as React from 'react';
import { Box, Typography, Stack, Button, Modal, TextField } from '@mui/material';
import { useQuery, useMutation, useApolloClient } from '@apollo/client';
import { QUERY_ME, QUERY_MIX } from '../utils/queries';
import { REMOVE_MIX, ADD_COMMENT } from '../utils/mutation';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  direction: 'column',
  alignItems: 'center',
  justifyContent: 'center'
  
};


//need to replace mixname typography with an actual button

export default function MyMixes() {
  const client = useApolloClient();
  const { loading, error, data } = useQuery(QUERY_ME);
  const [openModal, setOpenModal] = React.useState([]);
  const [removeMix] = useMutation(REMOVE_MIX);
  const [addComment] = useMutation(ADD_COMMENT);
  const [mixData, setMixData] = React.useState(null); // State to store mix query data
  
  const handleOpen = (index) => {
    const newOpenModal = [...openModal];
    newOpenModal[index] = true;
    setOpenModal(newOpenModal);
    handleQueryMix(data.me.mixes[index]._id);
  };
  const handleClose = (index) => {
    const newOpenModal = [...openModal];
    newOpenModal[index] = false;
    setOpenModal(newOpenModal);
  };

  const handleDeleteMix = async(mixId, index) => {
    try {
      await removeMix({
        variables: { mixId },
        refetchQueries: [{ query: QUERY_ME}]
      });
      handleClose(index);
    } catch (error) {
      console.error('Error deleting mix:', error);
    }
  };

  const handleAddComment = async(mixId, index) => {}

  const handleQueryMix = async (mixId) => {
    try {
      // Trigger the mix query here
      const { data: mixData } = await client.query({
        query: QUERY_MIX,
        variables: { mixId }
      });
      console.log('Mix data:', mixData);
      setMixData(mixData); // Store mix query data in state
    } catch (error) {
      console.error('Error querying mix:', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  //change error to styled typography
  if (error) return <p> Login or sign up to view your mixes</p>;

  const user = data.me;

    return (
      <Stack sx={{direction: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <Typography variant='h5'>{user.username}'s Mixes</Typography>
        {user.mixes.map((mix, index) => (
          <Box key={mix._id}>
            <Button
              variant='text'
              onClick={() => handleOpen(index)}
              sx={{ color: 'background.paper'}}
              >
                {mix.mixName}
              </Button>
              <Modal
                open={openModal[index]}
                onClose={() => handleClose(index)}
              >
                <Stack sx={style}>
                  <Typography variant='h4'>{mix.mixName}</Typography>
                  {mixData && (
                    <>
                      <Typography variant='subtitle1'>Total Calories: {mixData.getMix.totalCalories}</Typography>
                      <Typography variant='subtitle1'>Total Protein: {mixData.getMix.totalProtein}</Typography>
                      <Typography variant='subtitle1'>Total Fats: {mixData.getMix.totalFats}</Typography>
                      <Typography variant='subtitle1'>Total Carbs: {mixData.getMix.totalCarbs}</Typography>
                      <Typography variant='subtitle1'>Total Sodium: {mixData.getMix.totalSodium}</Typography>
                    </>
                  )}
                  <Box
                    component="form"
                    sx={{
                      '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField id="comment-box" variant="outlined" />
                    <Button variant='contained'>Comment</Button>
                  </Box>
                  <Button variant='contained' onClick={() => handleDeleteMix(mix._id, index)}>
                    Delete Mix
                  </Button>
                  {/* need a component for the macronutrient list here, see 26 thoughtlist  */}
                </Stack>
              </Modal>
            <Typography variant='subtitle1'>Created at: {mix.createdAt}</Typography>
          </Box>
        ))}
      </Stack>
    )
}
