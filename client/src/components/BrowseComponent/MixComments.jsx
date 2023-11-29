import React from 'react';
import { Stack, Typography, Box, TextField, Button } from '@mui/material';
import { useMixContext } from '../../MixContext';
import { useMutation, useQuery, useApolloClient } from '@apollo/client';
import { QUERY_MIX } from '../../utils/queries';
import { ADD_COMMENT, REMOVE_COMMENT } from '../../utils/mutation';

export default function MixComments() {
  const client = useApolloClient();
  const { currentMixDetails, refetchMixDetails } = useMixContext();
  const [addComment] = useMutation(ADD_COMMENT);
  const [removeComment] = useMutation(REMOVE_COMMENT);
  const [commentText, setCommentText] = React.useState(''); // State for comment text
  const [comments, setComments] = React.useState([]); // State for comments


  const handleAddComment = async (mixId, commentText) => {
    try {
      console.log('Mix ID:', mixId);
      console.log('Comment Text:', commentText);
      await addComment({
        variables: { mixId, commentText }
      });
  
      console.log('Comment added successfully');
      refetchMixDetails(mixId);
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
  };

  const handleQueryMix = async (mixId) => {
    try {
      // Trigger the mix query here
      const { data: mixData } = await client.query({
        query: QUERY_MIX,
        variables: { mixId }
      });
      console.log('Mix data:', mixData);
      // Set comments in state
      setComments(mixData.getMix.comments || []);
    } catch (error) {
      console.error('Error querying mix:', error);
      console.error('GraphQL error details:', error.graphQLErrors);
      console.error('Network error details:', error.networkError);
    }
  };

  return (
    <Stack>
      {currentMixDetails && (
        <>
          <Typography variant='h5'>Comments</Typography>
          <ul>
            {currentMixDetails.comments.map((comment) => (
              <li key={comment._id}>
                <Typography variant='subtitle1'>{comment.commentAuthor}</Typography>
                <Typography variant='subtitle1'>{comment.commentText}</Typography>
                <Typography variant='caption'>Posted on {comment.createdAt}</Typography>
              </li>
            ))}
          </ul>
          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              const comment = e.target.elements.comment.value;
              const mixId = currentMixDetails._id; // Assuming the mixId is available in currentMixDetails
              handleAddComment(mixId, comment);
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
        </>
      )}
      {(!currentMixDetails) && (
        <Typography variant='body1'>No comments available for this mix.</Typography>
      )}
    </Stack>
  );
}
