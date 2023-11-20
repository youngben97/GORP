import * as React from 'react';
import { Paper, Grid, Typography, Box} from '@mui/material';

export default function MixCard() {
    return (
        <Grid item xs={4}>
            <Paper elevation={2}>
                <Box paddingX={1}>
                  <Typography variant = 'h6' gutterBottom sx={{textAlign: 'center'}}>
                      Trail Mix Name
                  </Typography>
                  <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                  >
                      <Typography variant='subtitle1' gutterBottom>
                         Created By: Username
                      </Typography>
                      <Typography variant='subtitle2' gutterBottom>
                         Calorie Count: ###
                      </Typography>
                      <Typography variant='subtitle2' gutterBottom>
                         Protein: ##g
                      </Typography>
                      <Typography variant='subtitle2' gutterBottom>GORPs: ##</Typography>
                  </Box>
                </Box>
            </Paper>
        </Grid>
    )
}

//calorie count, protein, upvote counter, upvote button