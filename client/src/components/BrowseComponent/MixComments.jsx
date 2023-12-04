import React from 'react';
import { Stack, Typography, Box, TextField, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useMixContext } from '../../MixContext';
import { useMutation, useApolloClient } from '@apollo/client';
import { QUERY_MIX } from '../../utils/queries';
import { ADD_COMMENT, REMOVE_COMMENT } from '../../utils/mutation';
import Auth from '../../utils/auth';

export default function MixComments() {
  const client = useApolloClient();
  const { currentMixDetails, updateMixDetails } = useMixContext();
  const [addComment] = useMutation(ADD_COMMENT);
  const [removeComment] = useMutation(REMOVE_COMMENT);
  const [commentText, setCommentText] = React.useState(''); // State for comment text
  const userProfile = Auth.getProfile();
  console.log('userProfile:', userProfile);
 

  const handleAddComment = async (mixId, commentText) => {
    try {
      // console.log('Mix ID:', mixId);
      // console.log('Comment Text:', commentText);
      await addComment({
        variables: { mixId, commentText }
      });

      const { data: mixData } = await client.query({
        query: QUERY_MIX,
        variables: { mixId },
      });


      updateMixDetails(mixData.getMix);
      setCommentText('');
      console.log('Comment added successfully');
    } catch (error) {
      console.error('Error adding comment:', error);
      console.error('GraphQL error details:', error.graphQLErrors);
      console.error('Network error details:', error.networkError);
    }
  };

  const handleRemoveComment = async (mixId, commentId) => {
    try {
      await removeComment({
        variables: { mixId, commentId}
      });

      const { data: mixData } = await client.query({
        query: QUERY_MIX,
        variables: { mixId },
      });

      updateMixDetails(mixData.getMix);
      console.log('Comment successfully deleted');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Stack sx={{ alignItems: 'center', justifyContent: 'center', p:1}}>
      {currentMixDetails && (
        <>
          <Typography variant='h5' sx={{bgcolor: 'primary.main', color: 'background.default', width: '100%', borderRadius:1, textAlign:'center', m:1, p:1, border:2, borderColor: 'background.default'}}>Comments</Typography>
            {currentMixDetails.comments.map((comment) => (
              <Box key={comment._id} sx={{textAlign: 'center', border: 2, borderColor: 'background.default', borderRadius: 1, mb: 1, mx: 2}}>
                <Typography variant='subtitle1'>{comment.commentAuthor}</Typography>
                <Typography variant='subtitle1'>{comment.commentText}</Typography>
                <Typography variant='caption'>Posted on {comment.createdAt}</Typography>
                {userProfile.data.username === comment.commentAuthor && (
                  <Button variant='contained' onClick={() => handleRemoveComment(currentMixDetails._id, comment._id)}>
                    <DeleteIcon/>
                  </Button>
                )}
              </Box>
            ))}
          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              const comment = e.target.elements.comment.value;
              const mixId = currentMixDetails._id;
              handleAddComment(mixId, comment);
            }}
            sx={{
            m: 1, width: '100%', display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'space-between'
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
              sx={{m:1}}
            />
            <Button
              type="submit"
              variant='contained'
              sx={{m:1}}
            >
              Submit
            </Button>
          </Box>
        </>
      )}
      {(!currentMixDetails) && (
        <Typography variant='h6' sx={{bgcolor: 'primary.main', color: 'background.default', width: '100%', borderRadius:1, textAlign:'center', m:1, p:1, border:2, borderColor: 'background.default'}}>Select a mix to view comments.</Typography>
      )}
    </Stack>
  );
}
