import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// import MixCard from './components/MixCard';
import { Outlet } from 'react-router-dom';
import './App.css'

// import 'index'


export default function AppContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      <Outlet />
      </Container>
    </React.Fragment>
  );
}