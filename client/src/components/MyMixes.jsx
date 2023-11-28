import * as React from 'react';
import { Box, Typography, Stack, Button, Modal } from '@mui/material';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { REMOVE_MIX } from '../utils/mutation';

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

//need to add delete button mutation (in modal?)
//need to replace mixname typography with an actual button

export default function MyMixes() {
  const { loading, error, data } = useQuery(QUERY_ME);
  const [openModal, setOpenModal] = React.useState([]);
  const [removeMix] = useMutation(REMOVE_MIX);
  
  const handleOpen = (index) => {
    const newOpenModal = [...openModal];
    newOpenModal[index] = true;
    setOpenModal(newOpenModal);
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
  }

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
