import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MixCard from './components/MixCard';


// import 'index'


export default function AppContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
        {/* <MixCard/> */}
      </Container>
    </React.Fragment>
  );
}