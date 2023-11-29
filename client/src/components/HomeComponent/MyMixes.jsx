import * as React from 'react';
import { Box, Typography, Stack, Button, Modal, TextField } from '@mui/material';
import { useQuery, useMutation, useApolloClient } from '@apollo/client';
import { QUERY_ME, QUERY_MIX } from '../../utils/queries';
import { REMOVE_MIX, ADD_COMMENT, REMOVE_COMMENT } from '../../utils/mutation';

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

export default function MyMixes() {
  const client = useApolloClient();
  const { loading, data } = useQuery(QUERY_ME);
  const [openModal, setOpenModal] = React.useState([]);
  const [removeMix] = useMutation(REMOVE_MIX);
  const [addComment] = useMutation(ADD_COMMENT);
  const [removeComment] = useMutation(REMOVE_COMMENT);
  const [mixData, setMixData] = React.useState(null); // State to store mix query data
  const [commentText, setCommentText] = React.useState(''); // State for comment text
  const [comments, setComments] = React.useState([]); // State for comments
  
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
    // Clear comment-related state when closing modal
    setCommentText('');
    setComments([]);
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

  const handleAddComment = async (mixId, index, commentText) => {
    try {
      console.log('Mix ID:', mixId);
      console.log('Comment Text:', commentText);
      await addComment({
        variables: { mixId, commentText },
        // refetchQueries: [{ query: QUERY_MIX, variables: { mixId } }],
      });
  
      console.log('Comment added successfully');
      // Optionally, you can refetch the mix data here as well
      handleQueryMix(mixId);
    } catch (error) {
      console.error('Error adding comment:', error);
      console.error('GraphQL error details:', error.graphQLErrors);
      console.error('Network error details:', error.networkError);
    }
  };

  const handleRemoveComment = async (mixId, commentId) => {
    try {
      await removeComment({
        variables: {mixId, commentId}
      });
      console.log('Comment deleted');
      handleQueryMix(mixId);
    } catch (error) {
      console.error('Error deleting comment:', error.message);
      console.error('GraphQL error details:', error.graphQLErrors);
      console.error('Network error details:', error.networkError);
    }
  }

  const handleQueryMix = async (mixId) => {
    try {
      // Trigger the mix query here
      const { data: mixData } = await client.query({
        query: QUERY_MIX,
        variables: { mixId }
      });
      console.log('Mix data:', mixData);
      setMixData(mixData); // Store mix query data in state
      // Set comments in state
      setComments(mixData.getMix.comments || []);
    } catch (error) {
      console.error('Error querying mix:', error);
      console.error('GraphQL error details:', error.graphQLErrors);
      console.error('Network error details:', error.networkError);
    }
  };

  if (loading) return <Typography>Loading...</Typography>;
  //change error to styled typography
  // if (error) return <p>Error loading data. Please try again.</p>;

  const user = data?.me;

  if (!user) return <Typography variant='body1' sx={{ bgcolor: 'primary.main', color: 'text.secondary', m:1, p:1, textAlign: 'center', borderRadius: 1}}>Login or sign up to view your mixes.</Typography>;

    return (
      <Stack sx={{direction: 'column', alignItems: 'center', justifyContent: 'center', p:1}}>
        {user && (
          <Typography variant='h5' sx={{ bgcolor: 'primary.main', color: 'text.secondary', p:1, textAlign: 'center', borderRadius: 1, width: '100%'}}>{user.username}'s Mixes</Typography>
        )}
        {user?.mixes.map((mix, index) => (
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
                  {mixData && mixData.getMix && (
                    <>
                      <Typography variant='h5'>Ingredients</Typography>
                        <ul>
                        {mixData.getMix.ingredients.map((ingredient) => (
                          <li key={ingredient.id}>
                            {ingredient.name}: {ingredient.amount}
                          </li>
                          ))}
                        </ul>
                      <Typography variant='subtitle1'>Total Calories: {mixData.getMix.totalCalories}</Typography>
                      <Typography variant='subtitle1'>Total Protein: {mixData.getMix.totalProtein}</Typography>
                      <Typography variant='subtitle1'>Total Fats: {mixData.getMix.totalFats}</Typography>
                      <Typography variant='subtitle1'>Total Carbs: {mixData.getMix.totalCarbs}</Typography>
                      <Typography variant='subtitle1'>Total Sodium: {mixData.getMix.totalSodium}</Typography>
                    </>
                  )}
                  <Typography variant='h5'>Comments</Typography>
                    {comments.map(comment => (
                      <Box key={comment.commentId}>
                        <Typography variant='body1'>{comment.commentAuthor}: {comment.commentText}</Typography>
                        <Typography variant='caption'>Created at: {comment.createdAt}</Typography>
                        <Button
                          variant='outline'
                          onClick={() => handleRemoveComment(mix._id, comment._id)}
                        >
                          Delete Comment
                        </Button>
                      </Box>
                    ))}
                  <Box
                    component="form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const comment = e.target.elements.comment.value;
                      handleAddComment(mix._id, index, comment);
                    }}
                    sx={{
                      '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="comment"
                      name="comment"
                      label="Comment"
                      variant="outlined"
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      />
                    <Button
                      type="submit"
                      variant='contained'
                    >
                      Submit
                    </Button>
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
